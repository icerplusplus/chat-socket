import Image from "next/image";
import React from "react";

interface AvatarGroupProps {
  avatars: string[];
  quantity: number;
}

const AvatarGroup = ({ avatars, quantity }: AvatarGroupProps) => {
  return (
    <div className="grid grid-cols-2 items-center">
      {avatars.map((avatar, index) => (
        <div className={`w-[26px] h-[26px] z-[${index}]`} key={avatar}>
          <Image
            src={avatar}
            alt={avatar}
            width={26}
            height={26}
            className="rounded-full object-contain w-full h-full border border-white"
          />
        </div>
      ))}
      <div className="w-[26px] h-[26px] z-[3] bg-gray-500/10 rounded-full inline-flex items-center justify-center text-[12px] text-gray-400 font-semibold">
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default AvatarGroup;
