"use client";

import { useState } from "react";
import MenuButton from "./MenuButton";
import useDetectWindowWidth from "../../hooks/useDetectWindowWidth";

interface MenuButtonProps {
  text: string;
  href: string;
  onClick?: () => void;
}

interface HeaderMenuProps {
  items: MenuButtonProps[];
}

function HeaderMenu({ items }: HeaderMenuProps) {
  const [showDropdownIndex, setShowDropdownIndex] = useState<number | null>(
    null
  );
  const windowWidth = useDetectWindowWidth();

  const toggleDropdown = (index: number) => {
    setShowDropdownIndex(showDropdownIndex === index ? null : index);
  };

  const renderMenuItems = () => {
    if (windowWidth > 890) {
      return items.map((item, index) => (
        <MenuButton key={index} text={item.text} href={item.href} />
      ));
    } else if (windowWidth > 879) {
      return (
        <>
          {items.slice(0, 5).map((item, index) => (
            <MenuButton key={index} text={item.text} href={item.href} />
          ))}
          <div className="relative">
            <MenuButton
              text="더보기 ∨"
              href="#"
              onClick={() => toggleDropdown(5)}
            />
            {showDropdownIndex === 5 && (
              <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                <ul>
                  {items.slice(5).map((item, index) => (
                    <li key={index}>
                      <MenuButton text={item.text} href={item.href} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      );
    } else if (windowWidth > 784) {
      return (
        <>
          {items.slice(0, 4).map((item, index) => (
            <MenuButton key={index} text={item.text} href={item.href} />
          ))}
          <div className="relative">
            <MenuButton
              text="더보기 ∨"
              href="#"
              onClick={() => toggleDropdown(4)}
            />
            {showDropdownIndex === 4 && (
              <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                <ul>
                  {items.slice(4).map((item, index) => (
                    <li key={index}>
                      <MenuButton text={item.text} href={item.href} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          {items.slice(0, 3).map((item, index) => (
            <MenuButton key={index} text={item.text} href={item.href} />
          ))}
          <div className="relative">
            <MenuButton
              text="더보기 ∨"
              href="#"
              onClick={() => toggleDropdown(3)}
            />
            {showDropdownIndex === 3 && (
              <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                <ul>
                  {items.slice(3).map((item, index) => (
                    <li key={index}>
                      <MenuButton text={item.text} href={item.href} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div className="text-white flex-grow">
      <div className="hidden md:flex justify-end">
        <div className="flex py-1 font-medium text-sm">{renderMenuItems()}</div>
      </div>
    </div>
  );
}

export default HeaderMenu;
