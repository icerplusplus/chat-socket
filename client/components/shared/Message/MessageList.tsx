import { MessageType } from "@/utils/types";
import React from "react";
import Message from "./Message";

interface MessageListProps {
  messages: MessageType[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div>
      {messages.map((message) => (
        <Message {...message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
