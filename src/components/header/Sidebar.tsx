import React from "react";
import MenuButton from "./MenuButton";

interface SidebarProps {
  closeSidebar: () => void;
}

function Sidebar({ closeSidebar }: SidebarProps) {
  return (
    <div className="absolute left-[-20px] top-[-30px] w-60 py-2 h-screen bg-white shadow-xl z-20 font-medium">
      <button
        className="h-[60px] px-3.5 flex justify-center items-center"
        onClick={closeSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <MenuButton text="Home" href="/" />
      <MenuButton text="People" href="/people" />
      <MenuButton text="Projects" href="/projects" />
      <MenuButton text="Publications" href="/publications" />
      <MenuButton text="Lectures" href="/lectures" />
      <MenuButton text="전공동아리" href="/전공동아리" />
    </div>
  );
}

export default Sidebar;
