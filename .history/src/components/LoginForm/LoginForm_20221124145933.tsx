import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";

type LoginFormProps = {
  value: string;
  setValue: (value: string) => void;
};

export const LoginForm = () => {
  const [showContent, setShowContent] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>Submit</button>
      <button>Register</button>
    </div>
  );
};
