import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = string;

interface SocketIOHook {
  socket: Socket | null;
  messages: Message[];
  sendMessage: (message: Message) => void;
}

export const useSocketIO = (): SocketIOHook => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const socketInstance = io("http://localhost:3001");

    socketInstance.on("connect", () => {
      console.log("Connected to Socket.io server");
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from Socket.io server");
    });

    socketInstance.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    console.log("efect socket");

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const sendMessage = (message: Message) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return {
    socket,
    messages,
    sendMessage,
  };
};
