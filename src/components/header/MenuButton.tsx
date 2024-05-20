"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

function MenuButton({ text, href, onClick }: MenuButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href}>
      <p
        className={`px-3.5 py-2 hover:text-[#C1C1C1] hover:text-white ${
          clicked ? "bg-black" : ""
        }`}
        onClick={handleClick}
      >
        {text}
      </p>
    </Link>
  );
}

export default MenuButton;
