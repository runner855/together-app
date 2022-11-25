import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

export const LoginForm = () => {
  const [showContent, setShowContent] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return <input type="submit" value={(e) => setValue(e.target.value)} />;
};
