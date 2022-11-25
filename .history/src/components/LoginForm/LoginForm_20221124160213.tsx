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
    <div className="form">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>Submit</button>
      <button onClick={() => console.log("register")}>Register</button>
    </div>
  );
};
