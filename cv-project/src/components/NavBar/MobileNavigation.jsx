import { useState } from "react";
import "./NavBar.css";
import { NavLinks } from "./NavLinks";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";

export const MobileNavigation = () => {
  const [click, setClick] = useState(false);

  const Hamburger = (
    <MdOutlineMenu
      className="hamburger--menu"
      size="35px"
      color="#1a91f0"
      onClick={() => setClick(!click)}
    />
  );

  const Close = (
    <MdClose
      className="hamburger--menu"
      size="30px"
      color="#1a91f0"
      onClick={() => setClick(!click)}
    />
  );

  const closeMenu = () => setClick(false);

  return (
    <nav className="Mobile--navigation">
      <a id="page--logo">CV Creator</a>
      {click ? Close : Hamburger}
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
};
