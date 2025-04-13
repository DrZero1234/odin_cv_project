import "./NavBar.css";
import "../../index.css";

export const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <nav
      className={`nav--links absolute top-[8vh] right-0 z-10 flex min-h-[50vh] w-full flex-col items-center justify-evenly border-t-[3px] border-t-[#10529b] bg-[#f7f7f7] lg:relative lg:top-0 lg:right-auto lg:z-0 lg:min-h-auto lg:flex-row lg:justify-end lg:border-t-0 lg:bg-inherit`}
    >
      <ul className="flex flex-col items-center lg:flex-row lg:content-evenly">
        <li
          className="inline-block list-none px-2.5 py-5"
          onClick={() => isClicked && closeMenu()}
        >
          <a
            href="#"
            className="font-bold text-black no-underline lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          >
            CV template
          </a>
        </li>
        <li
          className="inline-block list-none px-2.5 py-5"
          onClick={() => isClicked && closeMenu()}
        >
          <a
            href="#"
            className="font-bold text-black lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          >
            CV examples
          </a>
        </li>
        <li
          className="inline-block list-none px-2.5 py-5"
          onClick={() => isClicked && closeMenu()}
        >
          <a
            href="#"
            className="font-bold text-black lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          >
            Cover letter
          </a>
        </li>
        <li
          className="inline-block list-none px-2.5 py-5"
          onClick={() => isClicked && closeMenu()}
        >
          <a
            href="#"
            className="font-bold text-black lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          >
            Resources
          </a>
        </li>
        <li
          className="inline-block list-none px-2.5 py-5"
          onClick={() => isClicked && closeMenu()}
        >
          <a
            href="#"
            className="font-bold text-black no-underline lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          >
            FAQ
          </a>
        </li>
      </ul>
      <div className="navbar--separator hidden h-[20px] w-0.5 bg-[#d9deeb] lg:block"></div>
      <div className="user--nav flex flex-col items-center gap-4 px-5 py-2.5 lg:flex-row">
        <a
          href="#"
          className="font-bold text-black no-underline lg:transition-colors lg:duration-200 lg:hover:text-[#10529b]"
          onClick={() => isClicked && closeMenu()}
        >
          My account
        </a>
        <button
          className="navbar--btn inline-block rounded-sm border-2 border-[#1a91f0] bg-inherit px-[23px] py-[13px] text-[18px] font-[600] text-nowrap text-[#1a91f0] outline-transparent transition-[color,background-color,shadow] duration-100 hover:cursor-pointer hover:bg-[#eef7fe]"
          onClick={() => isClicked && closeMenu()}
        >
          Build my resume
        </button>
      </div>
    </nav>
  );
};
