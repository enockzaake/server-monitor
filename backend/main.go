package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func getServerAnalytics(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error upgrading to websocket ", err)
		return
	}
	defer conn.Close()

	for {
		time.Sleep(2 * time.Second)
		err := conn.WriteMessage(websocket.TextMessage, []byte(time.Now().Format(time.RFC3339)))
		if err != nil {
			log.Println("Error wrriting to websocket ", err)
			return
		}
	}
	// response := "Server up and running"

	// w.Header().Set("Content-Type", "application/json")
	// json.NewEncoder(w).Encode(response)
}

func handleWebsocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("Error upgrading websocket.", err)
		return
	}
	defer conn.Close()

	for {
		time.Sleep(2 * time.Second)
		err := conn.WriteMessage(websocket.TextMessage, []byte(time.Now().Format(time.RFC3339)))
		if err != nil {
			log.Println("Error writing message to WebSocket:", err)
			return
		}
	}

}

func main() {
	fmt.Println("SERVER MONITOR")
	router := mux.NewRouter()

	router.HandleFunc("/", getServerAnalytics)
	router.HandleFunc("/ws", handleWebsocket)
	log.Fatal(http.ListenAndServe(":2000", router))

}