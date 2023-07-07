"use client";
import React from "react";
import IconButton from "../common/IconButton";
import {
  ChatOutlineIcon,
  ChatSolidIcon,
  SquaresPlusOutlineIcon,
  SquaresPlusSolidIcon,
} from "../icons/hero-icons";
import { IconStyle } from "@/utils/types/icon";

const iconStyles: IconStyle[] = [
  {
    id: "ChatIcon",
    defaultIcon: <ChatOutlineIcon className="h-7 w-7" color="#fff" />,
    activeIcon: <ChatSolidIcon className="h-7 w-7" color="#fff" />,
    active: true,
  },
  {
    id: "SquaresPlusIcon",
    defaultIcon: <SquaresPlusOutlineIcon className="h-7 w-7" color="#fff" />,
    activeIcon: <SquaresPlusSolidIcon className="h-7 w-7" color="#fff" />,
  },
];

const Navbar = () => {
  return (
    <div>
      {iconStyles.map(({ defaultIcon, activeIcon, active, id }) => (
        <IconButton
          defaultIcon={defaultIcon}
          activeIcon={activeIcon}
          active={active}
          key={id}
        />
      ))}
    </div>
  );
};

export default Navbar;
