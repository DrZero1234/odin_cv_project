import { NavLinks } from "./NavLinks";
import "./NavBar.css";

export const DesktopNavigation = () => {
  return (
    <nav className="Desktop--navigation font-Roboto-Bold hidden lg:flex">
      <a href="#" id="page--logo">
        CV Creator
      </a>
      <NavLinks />
    </nav>
  );
};
