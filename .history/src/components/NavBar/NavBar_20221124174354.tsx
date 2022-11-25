import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../logoimages/logo.png";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Button, Modal } from "antd";
import { Avatar } from "antd";
import "../NavBar/NavBar.css";
import { modals } from "../../../.history/src/constants/dictionary_20221124172301";
import {
  GROUPS_LABEL,
  CREATEGROUP_LABEL,
  LANGUAGE_LABEL,
  MODAL_LABEL,
} from "../../constants/dictionary";

import {
  AppUrls,
  LanguageEnum,
  languages,
  ModalContentEnum,
} from "../../types/Apptypes";

const items: MenuProps["items"] = [
  {
    label: <p>{LANGUAGE_LABEL.it}</p>,
    key: "0",
  },
  {
    label: <p>{LANGUAGE_LABEL.en}</p>,
    key: "1",
  },
];

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showContent, setShowContent] = useState<string>("");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
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
              <Link to={AppUrls.NETWORK}>{GROUPS_LABEL[languages]}</Link>
            </li>
            <li>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div
                  className="lang_dropdown"
                  onClick={(e) => e.preventDefault()}
                >
                  <Space>
                    {LANGUAGE_LABEL[languages]}
                    <DownOutlined />
                  </Space>
                </div>
              </Dropdown>
            </li>
            <li>
              <Link to={AppUrls.CREATEGROUP}>
                {CREATEGROUP_LABEL[languages]}
              </Link>
            </li>
            <li>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
            </li>
            <li>
              <Button
                className="login"
                type="primary"
                onClick={() => {
                  setIsModalOpen(true);
                  setShowContent(ModalContentEnum.LOGIN);
                }}
              >
                {MODAL_LABEL.login}
              </Button>
              <Modal
                title="Login"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                {showContent === ModalContentEnum.LOGIN ? (
                  <select className="form-control">
                    <h4>Choose Your Account</h4>
                    <option>John</option>
                    <option>Mike</option>
                    <option>Mario</option>
                  </select>
                ) : (
                  <>
                    <h1>Register</h1>
                    <form>
                      <input type="email" />
                      <input type="password" />
                    </form>
                  </>
                )}
                <button
                  onClick={() => {
                    setShowContent(ModalContentEnum.REGISTER);
                  }}
                >
                  {MODAL_LABEL.register}
                </button>
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
