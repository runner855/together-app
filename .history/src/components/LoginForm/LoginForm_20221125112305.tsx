import React, { useState } from "react";

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
        <img src={logo} alt="logo" />
      </div>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
    </form>
  );
};
