import React from "react";
import Avatar from "@/components/common/Avatar";
import { getTimeFromTimestamp } from "@/utils/common";
import { MessageType } from "@/utils/types";

type MessageProps = MessageType;

const Message = ({ message, sender, receiver, sendedAt }: MessageProps) => {
  // me
  const me = "Icer";

  // convert sendedAt(time) to HH:MM format
  const sendedTime = getTimeFromTimestamp(sendedAt);

  return (
    <div className={`chat ${me === sender ? "chat-end" : "chat-start"}`}>
      {/* {avatar && (
        <div className="chat-image avatar">
          <div className="w-12 rounded-full">
            <Avatar avatar={avatar} />
          </div>
        </div>
      )} */}
      <div
        className={`chat-bubble text-base text-black shadow ${
          me === sender ? "bg-blue/50" : "bg-white"
        }`}
      >
        <div className="mb-1">{message}</div>
        <span className="opacity-60 text-xs left-0 bottom-0">{sendedTime}</span>
      </div>
    </div>
  );
};

export default Message;
