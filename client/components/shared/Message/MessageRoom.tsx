"use client";
import React, { useRef, useState } from "react";
import Avatar from "@/components/common/Avatar";
import { MessageBoxType, MessageType } from "@/utils/types";
import AvatarGroup from "@/components/common/AvatarGroup";
import {
  PaperAirplaneOutlineIcon,
  SearchOutlineIcon,
  TagOutlineIcon,
  VideoCameraOutlineIcon,
  VideoCameraSolidIcon,
  ViewColumnsOutlineIcon,
  ViewColumnsSolidIcon,
} from "@/components/icons/hero-icons";
import { IconStyle } from "@/utils/types/icon";
import MessageList from "./MessageList";
import Drawer from "@/components/common/Drawer";
import { useSocketIO } from "@/hooks";

interface MessageRoomProps {
  generalInfo: MessageBoxType;
}

enum Action {
  Search = "search",
  Call = "video-call",
  OpenStorage = "open-storage",
}

const mockMessages: MessageType[] = [
  {
    id: "message-1",
    message: "hello",
    sender: "Tony Smith",
    receiver: "Icer",
    sendedAt: 1688549306101,
  },
  {
    id: "message-2",
    message: "It was said that you would, destroy the Sith, not join them.",
    sender: "Tony Smith",
    receiver: "Icer",
    sendedAt: 1688549306101,
  },
  {
    id: "message-3",
    message: "Hi.",
    sender: "Tony Smith",
    receiver: "Icer",
    sendedAt: 1688549306101,
  },
  {
    id: "message-4",
    message:
      "It was said that you would, destroy the Sith, not join them. \n It was said that you would, destroy the Sith, not join them.",
    sender: "Tony Smith",
    receiver: "Icer",
    sendedAt: 1688549306101,
  },
  {
    id: "message-5",
    message: "Hi.",
    sender: "Icer",
    receiver: "Tony Smith",
    sendedAt: 1688549306101,
  },
];

export const MessageRoom = ({ generalInfo }: MessageRoomProps) => {
  const [action, setAction] = useState<string>();
  const [storageVisible, setStorageVisible] = useState(false);
  const inputRef = useRef<string>("");

  // use app socket hook
  // const { socket, messages, sendMessage } = useSocketIO();
  // console.log("messages: ", messages);

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle input change
    inputRef.current = e.target.value;
  };

  const handleSendMessage = () => {
    // Handle send message
    console.log("sendMessage... ");
    // sendMessage(inputRef.current); // on
  };

  // Choose a new action
  const selectAction = (action: string, onClick?: () => void) => {
    setAction(action);
    onClick?.();
  };

  const eventStyles: IconStyle[] = [
    {
      id: Action.Search,
      defaultIcon: <SearchOutlineIcon className="w-5 h-5 text-gray-600" />,
      activeIcon: <SearchOutlineIcon className="w-5 h-5 text-blue" />,
    },
    {
      id: Action.Call,
      defaultIcon: <VideoCameraOutlineIcon className="w-5 h-5 text-gray-600" />,
      activeIcon: <VideoCameraSolidIcon className="w-5 h-5 text-blue" />,
    },
    {
      id: Action.OpenStorage,
      defaultIcon: <ViewColumnsOutlineIcon className="w-5 h-5 text-gray-600" />,
      activeIcon: <ViewColumnsSolidIcon className="w-5 h-5 text-blue" />,
      onClick: () => setStorageVisible(!storageVisible),
    },
  ];

  return (
    <div className="flex flex-row w-full">
      {/* Chat body  */}
      <div className="inline-flex flex-col h-screen flex-1">
        {/* Room Header */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 shadow z-50">
          {/* Avatar */}
          <div>
            {generalInfo.type === "user" && (
              <Avatar avatar={generalInfo.information.avatar[0]} isOnline />
            )}
            {generalInfo.type === "group" &&
              generalInfo.information.members && (
                <AvatarGroup
                  avatars={generalInfo.information.avatar}
                  quantity={generalInfo.information.members}
                />
              )}
          </div>
          <div className="inline-flex flex-col flex-1">
            <label className="font-bold text-base">
              {generalInfo.information.name}
            </label>
            <span>
              <TagOutlineIcon className="w-5 h-5 rotate-[135deg] text-gray-500 hover:text-blue" />
            </span>
          </div>
          <div className="inline-flex space-x-2">
            {eventStyles.map(({ id, activeIcon, defaultIcon, onClick }) => (
              <span
                key={id}
                className={`hover:bg-gray-500/20 p-1.5 rounded ${
                  action === id && "bg-blue/10"
                }`}
                onClick={() => {
                  selectAction(action === id ? "" : id, onClick);
                }}
              >
                {action === id ? activeIcon : defaultIcon}
              </span>
            ))}
          </div>
        </div>
        {/* Scroll body */}
        <div className="flex-grow bg-slate-300/20 p-4 overflow-y-scroll hide-scrollbar z-100">
          <MessageList messages={mockMessages} />
        </div>
        {/* Input */}
        <div className="inline-flex items-center w-full p-4 space-x-2 border-t border-slate-200">
          <div className="flex-1">
            <input
              onChange={handleMessageChange}
              type="text"
              className="outline-none border-none w-full"
              placeholder="Send a message..."
            />
          </div>
          <div onClick={handleSendMessage}>
            <PaperAirplaneOutlineIcon className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Storage */}
      <Drawer isOpen={storageVisible}>
        <div className="min-w-[22rem] max-w-[22rem]">
          <div className="inline-flex items-center justify-center w-full  p-4 h-[69px] border-b border-slate-200">
            <p className="text-lg font-semibold">Thông tin hộp thoại</p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
