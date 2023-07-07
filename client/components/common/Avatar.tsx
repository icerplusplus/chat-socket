import Image from "next/image";
import React from "react";

interface AvatarProps {
  avatar: string;
  isOnline?: boolean;
}
const Avatar = ({ avatar, isOnline }: AvatarProps) => {
  return (
    <div className={`w-12 h-12 avatar ${isOnline && "online"}`}>
      <Image
        src={avatar}
        alt={avatar}
        width={48}
        height={48}
        className="rounded-full object-contain w-12 h-12"
      />
    </div>
  );
};

export default Avatar;
