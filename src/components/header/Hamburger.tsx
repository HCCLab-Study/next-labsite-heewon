"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="relative justify-between items-center z-20">
        <button
          className="md:hidden hamburger-icon pr-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white mb-1"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </button>
        {isOpen && <Sidebar closeSidebar={closeSidebar} />}
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
            isOpen ? "opacity-50" : "opacity-0"
          } md:hidden`}
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}

export default Hamburger;
