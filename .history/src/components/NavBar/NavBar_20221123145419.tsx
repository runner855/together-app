import { useState } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/">Groups</NavLink>
            </li>
            <li>
              <NavLink to="/it(it)">IT(IT)</NavLink>
            </li>
            <li>
              <NavLink to="/create-group">Create Group</NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button>LOGIN</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
