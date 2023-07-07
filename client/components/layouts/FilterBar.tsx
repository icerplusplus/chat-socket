"use client";
import React, { useState } from "react";
import {
  TagSolidIcon,
  ExclamationCircleSolidIcon,
  ChevronDownOutlineIcon,
  EllipsisHorizontalOutlineIcon,
} from "../icons/hero-icons";
import Dropdown, { DropdownOptions } from "../common/Dropdown";

const messageOptions: DropdownOptions[] = [
  {
    key: "customer",
    value: "Khách hàng",
    icon: <TagSolidIcon className="w-5 h-5 text-red" />,
  },
  {
    key: "farmily",
    value: "Gia đình",
    icon: <TagSolidIcon className="w-5 h-5 text-fuchsia-600" />,
  },
  {
    key: "job",
    value: "Công việc",
    icon: <TagSolidIcon className="w-5 h-5 text-orange-500" />,
  },
  {
    key: "friend",
    value: "Bạn bè",
    icon: <TagSolidIcon className="w-5 h-5 text-yellow-500" />,
  },
  {
    key: "lasted-feedback",
    value: "Trả lời sau",
    icon: <TagSolidIcon className="w-5 h-5 text-green-400" />,
  },
  {
    key: "company-friends",
    value: "Đồng nghiệp",
    icon: <TagSolidIcon className="w-5 h-5 text-blue-dark" />,
  },
  {
    key: "unknown",
    value: "Tin nhắn từ người lạ",
    icon: <ExclamationCircleSolidIcon className="w-5 h-5 text-gray-500" />,
  },
];

const moreOptions: DropdownOptions[] = [
  {
    key: "readed",
    value: "Đánh dấu đã đọc",
  },
  {
    key: "multiple-send",
    value: "Gửi tin đồng thời",
  },
];

interface Tab {
  key: string;
  value: string;
}

const tabs: Tab[] = [
  {
    key: "all",
    value: "Tất cả",
  },
  { key: "non-read", value: "Chưa đọc" },
];

const FilterBar = () => {
  const [tabIsSelected, setTabIsSeleted] = useState<string>("all");

  // Choose tab
  const handleTabChange = (key: string) => setTabIsSeleted(key);

  return (
    <div className="flex flex-row justify-between px-4 pt-2 border-b ">
      <div className="inline-flex items-center space-x-2 font-semibold text-slate-400 cursor-pointer">
        {tabs.map((tab) => (
          <p
            className={`${
              tabIsSelected === tab.key &&
              "text-blue-dark border-blue-dark border-b-2"
            } py-1 hover:text-blue-dark `}
            onClick={() => handleTabChange(tab.key)}
            key={tab.key}
          >
            {tab.value}
          </p>
        ))}
      </div>
      <div className="inline-flex items-center text-xs">
        <Dropdown
          type="checkbox"
          title="Phân loại"
          icon={<ChevronDownOutlineIcon className="w-4 h-4" />}
          options={messageOptions}
        />
        <Dropdown
          type="text"
          icon={<EllipsisHorizontalOutlineIcon className="w-5 h-5" />}
          options={moreOptions}
        />
      </div>
    </div>
  );
};

export default FilterBar;
