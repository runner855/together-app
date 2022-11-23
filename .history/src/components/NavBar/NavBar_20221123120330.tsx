import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logogray from "../../logoimages/logogray.png";

import "../NavBar/NavBar.css";

export const NavBar = () => {
  const [click, setClick] = useState(false);
  const [navbar, setNavBar] = useState(false);
  const [navbarLink, setNavBarlink] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const changeLink = () => {
    if (window.scrollY >= 80) {
      setNavBarlink(true);
    } else {
      setNavBarlink(false);
    }
  };

  window.addEventListener("scroll", changeLink);

  const hambClass = () => {
    if (click && navbarLink) {
      return "fas fa-times hamburger-white";
    } else if (click && !navbarLink) {
      return "fas fa-times hamburger-black";
    } else if (!click && navbarLink) {
      return "fas fa-bars hamburger-white";
    } else {
      return "fas fa-bars hamburger-black";
    }
  };

  return (
    <>
      <header>
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="navbar_container">
            <Link to="/" className="navbar_logo" onClick={closeMobileMenu}>
              <img
                src={logogray}
                alt="logo-w"
                className={`logo ${navbarLink ? "logogray" : " "}`}
              ></img>
            </Link>

            <input type="search" placeholder="Search..." />

            <div className="navbar_menu-icon" onClick={handleClick}>
              <i className={hambClass()} />
            </div>
            <ul className={click ? "navbar_menu active" : "navbar_menu"}>
              <li className="navbar_item">
                <Link
                  to="/it(it)"
                  className={navbarLink ? "navbarLink active" : "navbarLink"}
                  onClick={closeMobileMenu}
                >
                  <div id="myDropdown" class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </Link>
              </li>
              <li className="navbar_item">
                <Link
                  to="/wedo#Wedo"
                  className={navbarLink ? "navbarLink active" : "navbarLink"}
                  onClick={closeMobileMenu}
                >
                  We do
                </Link>
              </li>
              <li className="navbar_item">
                <Link
                  to="/careers#Careers"
                  className={navbarLink ? "navbarLink active" : "navbarLink"}
                  onClick={closeMobileMenu}
                >
                  Careers
                </Link>
              </li>
              <li className="navbar_item">
                <Link
                  to="/Contactus#Contactus"
                  className={navbarLink ? "navbarLink active" : "navbarLink"}
                  onClick={closeMobileMenu}
                >
                  <button>LOGIN</button>
                </Link>
              </li>

              <li></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
