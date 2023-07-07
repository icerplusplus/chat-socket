"use client";
import React from "react";
import AvatarGroup from "@/components/common/AvatarGroup";
import { MessageBoxType } from "@/utils/types";
import Avatar from "@/components/common/Avatar";

export const MessageBox = ({ id, type, information }: MessageBoxType) => {
  return (
    <div className="flex flex-1 items-center px-4 py-3 space-x-3 cursor-pointer hover:bg-gray-500/10">
      {/* avatar */}
      <div className="inline-flex items-center">
        {/* user avatar */}
        {type === "user" && <Avatar avatar={information.avatar[0]} isOnline />}
        {/* group avatar */}
        {type === "group" && information.members && (
          <AvatarGroup
            avatars={information.avatar}
            quantity={information.members}
          />
        )}
      </div>
      {/* info */}
      <div className="flex-1">
        <div className="inline-flex items-center w-full mb-1">
          <p className="text-base text-slate-600 font-medium flex-1 line-clamp-1">
            {information.name}
          </p>
          {/* timestamp */}
          <p className="text-xs">{information.timestamp}</p>
        </div>
        <div className="text-sm text-typo-gray line-clamp-1">
          {information.lastedMessage}
        </div>
      </div>
    </div>
  );
};
