"use client";
import React from "react";
import Avatar from "react-avatar";
import Navbar from "./Navbar";
import Settings from "./Settings";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-blue w-16 h-screen">
      <div className="">
        {/* avatar */}
        <div className="items-center justify-center p-2 my-4">
          <Avatar name="Cuong Mai" round size="48px" color="#006EDC" />
        </div>
        {/* chat navbar */}
        <Navbar />
      </div>

      <div>
        {/* settings */}
        <Settings />
      </div>
    </div>
  );
};

export default Sidebar;
