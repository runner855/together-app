import React from "react";
import { logo } from "../../logoimages/logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <div>{logo}</div>
      <div>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <li>Blog</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
