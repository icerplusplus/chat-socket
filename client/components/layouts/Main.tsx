import React from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import { MessageBoxList, MessageRoom } from "../shared/Message";
import { MessageBoxType } from "@/utils/types";

const mockMessageBoxs: MessageBoxType[] = [
  {
    id: "user-1",
    type: "user",
    information: {
      name: "Tony Smith",
      lastedMessage: "Send me this picture",
      timestamp: "2 days ago",
      avatar: [
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      ],
    },
  },
  {
    id: "user-2",
    type: "user",
    information: {
      name: "Elan Smith",
      lastedMessage: "Send me this picture",
      timestamp: "2 days ago",
      avatar: [
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      ],
    },
  },
  {
    id: "user-3",
    type: "user",
    information: {
      name: "Poker Han",
      lastedMessage:
        "Send me this picture. Send me this picture. Send me this picture",
      timestamp: "13 minutes ago",
      avatar: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
  },
  {
    id: "group-1",
    type: "group",
    information: {
      name: "Group: Poker players",
      lastedMessage:
        "Send me this picture. Send me this picture. Send me this picture",
      timestamp: "13 minutes ago",
      avatar: [
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
      members: 20,
    },
  },
];

const Main = () => {
  return (
    <div className="flex w-full text-sm">
      <div className="w-full md:max-w-md">
        {/* Header */}
        <Header />

        {/* FilterBar  */}
        <FilterBar />

        {/* Message List */}
        <MessageBoxList data={mockMessageBoxs} />
      </div>
      <div className="flex-1 border-x border-extra-gray hidden md:block">
        <MessageRoom generalInfo={mockMessageBoxs[0]} />
      </div>
    </div>
  );
};

export default Main;
