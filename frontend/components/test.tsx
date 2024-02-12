"use client";
import { useState, useEffect, useRef, useCallback } from "react";

function MyComponent() {
  // const [timestamp, setTimestamp] = useState<any>([]);
  const [timestamp, setTimestamp] = useState("");
  const wsRef = useRef<WebSocket | null>(null);
  const divRef = useRef(null);
  const [textColor, setTextColor] = useState("red");

  const handleSocket = useCallback(() => {
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser) return;

    // Create new WebSocket instance if not already created
    if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      const ws = new WebSocket("ws://localhost:2000/ws");
      wsRef.current = ws;

      ws.onopen = () => {
        console.log("WebSocket connected");
      };

      ws.onclose = () => {
        console.log("WebSocket closed");
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      // Event handler for incoming messages
      ws.onmessage = (event) => {
        const message = event.data;
        setTimestamp(message);
      };
    }
  }, []);

  useEffect(() => {
    handleSocket();

    // Cleanup function to close WebSocket on component unmount
    return () => {
      // Close WebSocket connection when component unmounts
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (divRef.current) {
      const paragraph = document.createElement("p");
      paragraph.style.color = textColor;
      paragraph.textContent = timestamp;
      divRef.current.insertBefore(paragraph, divRef.current.firstChild);
      setTextColor((prevColor: string) =>
        prevColor === "red" ? "green" : "red"
      );
    }
  }, [timestamp]);

  return <div ref={divRef}></div>;
}

export default MyComponent;
