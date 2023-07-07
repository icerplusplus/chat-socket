import React from "react";
import { IconStyle } from "@/utils/types/icon";
import {
  CloudOutlineIcon,
  CloudSolidIcon,
  Cog6ToothOutlineIcon,
  Cog6ToothSolidIcon,
} from "../icons/hero-icons";
import IconButton from "../common/IconButton";

const iconStyles: IconStyle[] = [
  {
    id: "ChatIcon",
    defaultIcon: <CloudOutlineIcon className="h-7 w-7" color="#fff" />,
    activeIcon: <CloudSolidIcon className="h-7 w-7" color="#fff" />,
  },
  {
    id: "SquaresPlusIcon",
    defaultIcon: <Cog6ToothOutlineIcon className="h-7 w-7" color="#fff" />,
    activeIcon: <Cog6ToothSolidIcon className="h-7 w-7" color="#fff" />,
  },
];

const Settings = () => {
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

export default Settings;
