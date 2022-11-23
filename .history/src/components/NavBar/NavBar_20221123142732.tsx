import React from "react";
import { logo } from "../../logoimages/logo.png";

export const NavBar = () => {
  return (
    <nav>
      <div>{logo}</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
