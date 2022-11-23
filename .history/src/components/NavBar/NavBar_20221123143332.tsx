import React from "react";
import logo from "../../logoimages/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
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
    </nav>
  );
};
