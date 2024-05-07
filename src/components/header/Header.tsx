import { oswald } from "@/app/layout";
import Hamburger from "./Hamburger";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import Search from "./Search";

export default function Header() {
  // 메뉴 항목 정의
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "People", href: "/people" },
    { text: "Projects", href: "/projects" },
    { text: "Publications", href: "/publications" },
    { text: "Lectures", href: "/lectures" },
    { text: "전공동아리", href: "/전공동아리" },
  ];

  return (
    <header className="flex justify-between items-center px-5 py-1.5">
      <Hamburger />
      <HeaderLogo />
      <HeaderMenu items={menuItems} />
      <Search />
    </header>
  );
}
