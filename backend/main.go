package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	// "os"
	"syscall"
	"time"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"

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

func getServerAnalytics(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error upgrading to websocket ", err)
		return
	}
	defer conn.Close()

	for {
		err := conn.WriteMessage(websocket.TextMessage, []byte(time.Now().Format(time.RFC3339)))
		if err != nil {
			log.Println("Error wrriting to websocket ", err)
			return
		}
	}
}

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

func main() {
	fmt.Println("SERVER MONITOR")
	simulator.HelloSimulator()
	router := mux.NewRouter()

	router.HandleFunc("/", serveHome)
	router.HandleFunc("/ws", handleWebsocket)

	getDiskUsage()

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

	log.Fatal(http.ListenAndServe(":2000", router))

}
