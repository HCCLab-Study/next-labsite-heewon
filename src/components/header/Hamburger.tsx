"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuButtonProps {
  text: string;
  href: string;
  pl?: string;
}

function MenuButton({ text, href, pl = "40px" }: MenuButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Link href={href}>
      <p
        className={`px-3.5 py-2 hover:text-[#C1C1C1] hover:text-white ${
          clicked ? "bg-black" : ""
        }`}
        style={{ paddingLeft: pl }}
        onClick={handleClick}
      >
        {text}
      </p>
    </Link>
  );
}

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        {isOpen && (
          <div className="absolute left-[-20px] top-[-30px] w-60 py-2 h-screen bg-white shadow-xl z-20 font-medium">
            <button
              className="h-[60px] px-3.5 flex justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
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
        )}
      </div>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black opacity-50 transition-opacity ${
            isOpen ? "opacity-50" : "opacity-0"
          } md:hidden`}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Hamburger;
