import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/">Network</Link>
            </li>
            <li>
              <Link to="/it(it)">IT(IT)</Link>
            </li>
            <li>
              <Link to="/create-group">Create Group</Link>
            </li>
            <li>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
