import { NavLinks } from "./NavLinks";
export const DesktopNavigation = () => {
  return (
    <nav className="Desktop--navigation font-Roboto-Bold hidden items-center lg:flex">
      <a
        href="#"
        id="page--logo"
        className="text-4xl font-extrabold text-nowrap text-[#10529b]"
      >
        CV Creator
      </a>
      <NavLinks />
    </nav>
  );
};
