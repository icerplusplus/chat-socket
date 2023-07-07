import React from "react";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
}

const Drawer = ({ children, isOpen }: DrawerProps) => {
  return (
    <div
      className={`top-0 right-0 bg-white border-l border-slate-200 h-full shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0 flex" : " translate-x-full hidden"
      }`}
    >
      <div className="h-screen">{children}</div>
    </div>
  );
};

export default Drawer;
