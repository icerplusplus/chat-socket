"use client";
import React from "react";
import {
  SearchOutlineIcon,
  UserGroupOutlineIcon,
  UserPlusOutlineIcon,
} from "../icons/hero-icons";

const Header = () => {
  return (
    <div className="flex flex-row items-center p-4 space-x-2">
      <div className="flex flex-row flex-1 items-center space-x-2 h-[30px] px-2.5 py-4 bg-[#EAEDF0] rounded">
        <SearchOutlineIcon className="w-4 h-4 text-gray-500" />
        <input
          className="
                flex-1 
                outline-none 
                border-none
                bg-inherit 
                text-sm
                "
          placeholder="Tìm kiếm"
        />
      </div>
      <UserPlusOutlineIcon className="w-5 h-5 text-gray-600" />
      <UserGroupOutlineIcon className="w-5 h-5 text-gray-600" />
    </div>
  );
};

export default Header;
