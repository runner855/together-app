import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

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
              <Link to={AppUrls.NETWORK}>Network</Link>
            </li>
            <li>
              <Link to="/it(it)">IT(IT)</Link>
            </li>
            <li>
              <Link to={AppUrls.CREATEGROUP}>Create Group</Link>
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
