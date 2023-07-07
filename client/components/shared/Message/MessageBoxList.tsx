"use client";
import React from "react";
import { MessageBoxType } from "@/utils/types";
import { MessageBox } from "./MessageBox";

interface MessageListProps {
  data: MessageBoxType[];
}

export const MessageBoxList = ({ data }: MessageListProps) => {
  return (
    <div>
      {data.map((message) => (
        <MessageBox {...message} key={message.id} />
      ))}
    </div>
  );
};
