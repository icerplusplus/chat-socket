import React from "react";

export interface DropdownOptions {
  key: string | number;
  value: string;
  icon?: React.ReactNode;
  noCheck?: boolean;
}

interface DropdownProps {
  type: "text" | "checkbox";
  title?: string;
  icon?: React.ReactNode;
  options: DropdownOptions[];
}

const Dropdown = ({ type, title, icon, options }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-end">
      <div className="px-1 hover:bg-gray-500/20 rounded">
        <label tabIndex={0} className="inline-flex items-center m-1 space-x-1 ">
          <span>{title}</span>
          {icon}
        </label>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-2 shadow-md bg-base-100 rounded ${
          type === "checkbox" ? "w-[252px]" : "w-52"
        }`}
      >
        {options.map((option) => (
          <li
            className="flex flex-row items-center hover:bg-slate-500/10"
            key={option.key}
          >
            <span
              className={`${
                (type !== "checkbox" || option.noCheck) && "hidden"
              } hover:bg-transparent focus:bg-transparent`}
            >
              <input type="checkbox" />
            </span>

            <p className="hover:bg-transparent">
              {option.icon}
              {option.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
