package main

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

var (
	serverURL = "wss://socketsbay.com/wss/v2/1/demo/"
	dialer = websocket.Dialer{}
)

func Agent(){
	fmt.Println("AGENT STARTED")

	ticker := time.NewTicker(5 * time.Second)
	defer ticker.Stop()

	for range ticker.C{
			metrics := "Metrics from agent"

			conn,_,err := dialer.Dial(serverURL,nil)

			if err != nil{
				fmt.Println("Failed dial to metrics server")
				return 
			}

			defer conn.Close()

			payload ,err := json.Marshal(metrics)

			if err != nil{
				fmt.Println("Failed serialize metrics")
				return 
			}

			if err := conn.WriteMessage(websocket.TextMessage,payload);err!=nil{
				fmt.Println("Failed to write  to websocket")
			}
	}
}
