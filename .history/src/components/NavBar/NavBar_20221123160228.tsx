import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Button, Modal } from "antd";

import "../NavBar/NavBar.css";
import { AppUrls } from "../../types/Apptypes";

const items: MenuProps["items"] = [
  {
    label: <a href="https://www.antgroup.com">IT(IT)</a>,
    key: "0",
  },
  {
    label: <a href="https://www.aliyun.com">EN(GB)</a>,
    key: "1",
  },
];

const showModal = () => {
  setIsModalOpen(true);
};

const handleOk = () => {
  setIsModalOpen(false);
};

const handleCancel = () => {
  setIsModalOpen(false);
};

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                  <div
                    className="lang_dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Space>
                      IT(IT)
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
                <Button type="primary" onClick={showModal}>
                  Open Modal
                </Button>
                <Modal
                  title="Basic Modal"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
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
