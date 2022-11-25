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
    <nav ClassNameName="navbar">
      <div ClassNameName="container">
        <div ClassNameName="logo">
          <img src={logo} alt="logo" />
        </div>
        <div ClassNameName="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div ClassNameName={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to={AppUrls.NETWORK}>{GROUPS_LABEL[languages]}</Link>
            </li>
            <li>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div
                  ClassNameName="lang_dropdown"
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
                ClassNameName="login"
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
                  <select ClassNameName="form-control">
                    <h4>Choose Your Account</h4>
                    <option>John</option>
                    <option>Mike</option>
                    <option>Mario</option>
                  </select>
                ) : (
                    <div ClassName="cont">
                    <div ClassName="form sign-in">
                      <h2>Welcome back,</h2>
                      <label>
                        <span>Email</span>
                        <input type="email" />
                      </label>
                      <label>
                        <span>Password</span>
                        <input type="password" />
                      </label>
                      <p ClassName="forgot-pass">Forgot password?</p>
                      <button type="button" ClassName="submit">Sign In</button>
                      <button type="button" ClassName="fb-btn">Connect with <span>facebook</span></button>
                    </div>
                    <div ClassName="sub-cont">
                      <div ClassName="img">
                        <div ClassName="img__text m--up">
                          <h2>New here?</h2>
                          <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div ClassName="img__text m--in">
                          <h2>One of us?</h2>
                          <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div ClassName="img__btn">
                          <span ClassName="m--up">Sign Up</span>
                          <span ClassName="m--in">Sign In</span>
                        </div>
                      </div>
                      <div ClassName="form sign-up">
                        <h2>Time to feel like home,</h2>
                        <label>
                          <span>Name</span>
                          <input type="text" />
                        </label>
                        <label>
                          <span>Email</span>
                          <input type="email" />
                        </label>
                        <label>
                          <span>Password</span>
                          <input type="password" />
                        </label>
                        <button type="button" ClassName="submit">Sign Up</button>
                        <button type="button" ClassName="fb-btn">Join with <span>facebook</span></button>
                      </div>
                    </div>
                  </div>
                  
                  <a href="https://dribbble.com/shots/3306190-Login-Registration-form" target="_blank" ClassName="icon-link">
                    <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png">
                  </a>
                  <a href="https://twitter.com/NikolayTalanov" target="_blank" ClassName="icon-link icon-link--twitter">
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png">
                  </a>
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
