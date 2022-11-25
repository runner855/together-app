import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Button, Modal } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";

import "../NavBar/NavBar.css";
import { AppUrls, Language } from "../../types/Apptypes";
import { LoginForm } from "../LoginForm/LoginForm";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">{Language.IT}</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">{Language.EN}</a>,
    key: "1",
  },
];

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
                  <div
                    className="lang_dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      {Language.IT}
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
                <Button className="login" type="primary" onClick={showModal}>
                  LOGIN
                </Button>
                <Modal
                  title="Login"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <LoginForm />
                </Modal>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
function setIsModalOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
