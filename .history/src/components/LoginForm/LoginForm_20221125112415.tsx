import React, { useState } from "react";
import Logo from "../../logoimages/logo.png";

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
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  );
};
