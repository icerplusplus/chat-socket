"use client";
import React from "react";

interface IconButtonProps {
  defaultIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const IconButton = ({
  defaultIcon,
  activeIcon,
  active,
  onClick,
}: Partial<IconButtonProps>) => {
  return (
    <div
      className={`
        w-16 
        h-16 
        flex 
        justify-center 
        items-center
        cursor-pointer
        ${active && "bg-blue-dark"}`}
      onClick={onClick}
    >
      {active ? activeIcon : defaultIcon}
    </div>
  );
};

export default IconButton;
