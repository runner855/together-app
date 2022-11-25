import React, { useState } from "react";
import Logo from "../../logoimages/logo.png";
import "../LoginForm/LoginForm.css";

export const LoginForm = () => {
  const [value, setValue] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <form>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="email">
        <input type="email" placeholder="email" />
      </div>
      <div className="password">
        <input type="password" placeholder="password" />
      </div>
    </form>
  );
};
