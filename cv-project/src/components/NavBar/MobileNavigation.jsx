import { useState } from "react";
import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { MdOutlineMenu, MdClose } from "react-icons/md";

export const MobileNavigation = () => {
  const [click, setClick] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className="hamburger--menu absolute right-[2%] cursor-pointer"
      size="40px"
      color="#1a91f0"
      onClick={() => setClick(!click)}
    />
  );

  const Close = (
    <MdClose
      className="hamburger--menu absolute right-[2%] cursor-pointer"
      size="40px"
      color="#1a91f0"
      onClick={() => setClick(!click)}
    />
  );

  const closeMenu = () => setClick(false);

  return (
    <nav className="Mobile--navigation font-Roboto-Bold flex min-h-[7vh] items-center lg:hidden">
      <a
        id="page--logo"
        className="text-4xl font-extrabold text-nowrap text-[#10529b]"
      >
        CV Creator
      </a>
      {click ? Close : Hamburger}
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
};
