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
    <nav classNameName="navbar">
      <div classNameName="container">
        <div classNameName="logo">
          <img src={logo} alt="logo" />
        </div>
        <div classNameName="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu />
        </div>
        <div classNameName={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to={AppUrls.NETWORK}>{GROUPS_LABEL[languages]}</Link>
            </li>
            <li>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div
                  classNameName="lang_dropdown"
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
                classNameName="login"
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
                  <select classNameName="form-control">
                    <h4>Choose Your Account</h4>
                    <option>John</option>
                    <option>Mike</option>
                    <option>Mario</option>
                  </select>
                ) : (
                    <form action="/">
                    <hr>
                  <div className="accounttype">
                    <input type="radio" value="None" id="radioOne" name="account" checked/>
                    <label for="radioOne" className="radio" chec>Personal</label>
                    <input type="radio" value="None" id="radioTwo" name="account" />
                    <label for="radioTwo" className="radio">Company</label>
                  </div>
                <hr>
                <label id="icon" for="name"><i className="icon-envelope "></i></label>
                <input type="text" name="name" id="name" placeholder="Email" required/>
                <label id="icon" for="name"><i className="icon-user"></i></label>
                <input type="text" name="name" id="name" placeholder="Name" required/>
                <label id="icon" for="name"><i className="icon-shield"></i></label>
                <input type="password" name="name" id="name" placeholder="Password" required/>
                <div className="gender">
                  <input type="radio" value="None" id="male" name="gender" checked/>
                  <label for="male" className="radio" chec>Male</label>
                  <input type="radio" value="None" id="female" name="gender" />
                  <label for="female" className="radio">Female</label>
                 </div> 
                 <p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
                 <a href="#" className="button">Register</a>
                </form>
              </div>                )}
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
