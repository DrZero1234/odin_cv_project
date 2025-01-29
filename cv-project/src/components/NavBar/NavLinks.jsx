import "./NavBar.css";

export const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <nav className="nav--links">
      <ul>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#">CV template</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#">CV examples</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#">Cover letter</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#">Resources</a>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <div className="navbar--separator"></div>
      <div className="user--nav">
        <a
          className="user--acc"
          onClick={() => isClicked && closeMenu()}
        >
          My account
        </a>
        <button
          className="navbar--btn"
          onClick={() => isClicked && closeMenu()}
        >
          Build my resume
        </button>
      </div>
    </nav>
  );
};
