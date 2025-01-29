import { NavLinks } from "./NavLinks";
import "./NavBar.css";

export const DesktopNavigation = () => {
  return (
    <nav className="Desktop--navigation">
      <a href="#" id="page--logo">
        CV Creator
      </a>
      <NavLinks />
    </nav>
  );
};
