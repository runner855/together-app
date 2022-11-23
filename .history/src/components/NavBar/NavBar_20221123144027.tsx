import React, { useState } from "react";
import logo from "../../logoimages/logo.png";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNavItems = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-elements">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/IT(IT)"}>
              <li>IT(IT)</li>
            </Link>
            <Link to={"/create-group"}>
              <li>Create Group</li>
            </Link>
            <Link to={"/network"}>
              <li>Network</li>
            </Link>
            <Link to={"/login"}>
              <li>
                <button>LOGIN</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
