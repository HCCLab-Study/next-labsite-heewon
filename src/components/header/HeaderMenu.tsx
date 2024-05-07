"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface MenuButtonProps {
  text: string;
  href: string;
  onClick?: () => void; // onClick 속성은 선택적으로 설정
}

function MenuButton({ text, href, onClick }: MenuButtonProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) {
      onClick(); // onClick 콜백 실행
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

const HeaderMenu = ({ items }: { items: MenuButtonProps[] }) => {
  const [showDropdownIndex, setShowDropdownIndex] = useState<number | null>(
    null
  );
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 윈도우 크기 변경 이벤트를 감지하여 실행
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 마운트 해제될 때 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 드롭다운 메뉴 표시/숨김 토글 함수
  const toggleDropdown = (index: number) => {
    setShowDropdownIndex(showDropdownIndex === index ? null : index);
  };

  return (
    <div className="text-white flex-grow">
      <div className="hidden md:flex justify-end">
        <div className="flex py-1 font-medium text-sm">
          {items.map((item, index) => {
            if (windowWidth <= 890 && windowWidth > 880 && index === 5) {
              // 윈도우 너비가 880 이하이고 인덱스가 5인 경우 드롭다운 메뉴 표시
              return (
                <div key={index} className="relative">
                  <MenuButton
                    text="더보기 ∨"
                    href="#"
                    onClick={() => toggleDropdown(index)} // 더보기 버튼 클릭 시 토글 함수 실행
                  />
                  {showDropdownIndex === index && (
                    <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                      <ul>
                        {items.slice(5).map((item, idx) => (
                          <li key={idx}>
                            <MenuButton text={item.text} href={item.href} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            } else if (windowWidth <= 880 && windowWidth > 784 && index === 4) {
              // 윈도우 너비가 880 이하이고 인덱스가 4인 경우 추가 드롭다운 메뉴 표시
              return (
                <div key={index} className="relative">
                  <MenuButton
                    text="더보기 ∨"
                    href="#"
                    onClick={() => toggleDropdown(index)} // 더보기 버튼 클릭 시 토글 함수 실행
                  />
                  {showDropdownIndex === index && (
                    <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                      <ul>
                        {items.slice(4).map((item, idx) => (
                          <li key={idx}>
                            <MenuButton text={item.text} href={item.href} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            } else if (windowWidth <= 784 && index === 3) {
              // 윈도우 너비가 784 이하이고 인덱스가 3인 경우 추가 드롭다운 메뉴 표시
              return (
                <div key={index} className="relative">
                  <MenuButton
                    text="더보기 ∨"
                    href="#"
                    onClick={() => toggleDropdown(index)} // 더보기 버튼 클릭 시 토글 함수 실행
                  />
                  {showDropdownIndex === index && (
                    <div className="absolute left-[-90px] p-5 ml-3 mt-5 w-[200px] bg-white text-black shadow-lg z-10">
                      <ul>
                        {items.slice(3).map((item, idx) => (
                          <li key={idx}>
                            <MenuButton text={item.text} href={item.href} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            } else if (windowWidth <= 880 && index >= 4) {
              // 인덱스가 4 이상인 경우 메뉴 버튼 숨김
              return null;
            } else {
              return (
                <MenuButton key={index} text={item.text} href={item.href} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
