package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"syscall"

	"github.com/enockzaake/server-monitor/types"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"

	"github.com/enockzaake/server-monitor/auth"
	"github.com/enockzaake/server-monitor/db"
	"github.com/enockzaake/server-monitor/simulator"
)


var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func getDiskUsage() []byte {
		// Disk Usage
		var stat syscall.Statfs_t
		err := syscall.Statfs("/", &stat)
		if err != nil {
			panic(err)
		}

		jsonData,err := json.Marshal(stat)
		if err != nil{
			panic(err)
		}

		return jsonData
}

// func getServerAnalytics(w http.ResponseWriter, r *http.Request) {
// 	conn, err := upgrader.Upgrade(w, r, nil)
// 	if err != nil {
// 		log.Println("Error upgrading to websocket ", err)
// 		return
// 	}
// 	defer conn.Close()

// 	for {
// 		err := conn.WriteMessage(websocket.TextMessage, []byte(time.Now().Format(time.RFC3339)))
// 		if err != nil {
// 			log.Println("Error writing to websocket ", err)
// 			return
// 		}
// 	}
// }

func handleWebsocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error upgrading websocket.", err)
		return
	}
	defer conn.Close()

	for {
		data := getDiskUsage()
		err := conn.WriteMessage(websocket.TextMessage, data )
		if err != nil {
			log.Println("Error writing message to WebSocket:", err)
			return
		}
	}
}

func serveHome(w http.ResponseWriter, r *http.Request) {
	response := "Server up and running"
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func handleLogin(w http.ResponseWriter,r *http.Request){
	var user types.User
	err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
	
	// Authenticate User
	authenticated, err := auth.AuthenticateUser(user.Email, user.Password)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    if authenticated {
		w.WriteHeader(http.StatusOK)
        fmt.Fprintf(w, "User authenticated successfully!")
    } else {
        http.Error(w, "Authentication failed!",http.StatusUnauthorized)
    }
}

func handleRegister(w http.ResponseWriter,r *http.Request){
	var user types.User
    err := json.NewDecoder(r.Body).Decode(&user)
    if err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }
	
    // // Register user
	w.Header().Set("Content-Type", "application/json")
    err = auth.RegisterUser(user)
    if err != nil {
		w.WriteHeader(http.StatusBadRequest) 
		json.NewEncoder(w).Encode(err.Error())
    }

	res := map[string]string{
        "message": "User registered successfully!",
    }
	
    w.WriteHeader(http.StatusCreated) //201
	json.NewEncoder(w).Encode(res)


}

func main() {
	fmt.Println("SERVER MONITOR STARTED ON PORT:2000")
	db,err := db.InitDB()
    if err != nil {
        fmt.Println("Error initializing database:", err)
        return
    }

	defer db.Close()
	
	simulator.HelloSimulator()
	router := mux.NewRouter()
	router.Schemes()

	router.HandleFunc("/", serveHome)
	router.HandleFunc("/ws", handleWebsocket)

	router.HandleFunc("/register",handleRegister).Methods("POST")
	router.HandleFunc("/login",handleLogin).Methods("POST")

	getDiskUsage()
	// Agent()

	// CPU Usage
	// cpuStats, err := os.ReadFile("/proc/stat")
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println("CPU Stats:", string(cpuStats))

	// // Memory Usage
	// memInfo, err := os.ReadFile("/proc/meminfo")
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println("Memory Info:", string(memInfo))


	//GET INSPIRATION FROM HERE
	// https://www.manageengine.com/network-monitoring/server-monitoring.html

	log.Fatal(http.ListenAndServe(":2000", router))

}
