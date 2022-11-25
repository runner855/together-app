import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

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
              <Link to="/it(it)">
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <div onClick={(e) => e.preventDefault()}>
                    <Space>
                      Click me
                      <DownOutlined />
                    </Space>
                  </div>
                </Dropdown>
              </Link>
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
