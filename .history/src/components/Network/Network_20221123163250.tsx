import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

export const Network = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="data:image/png;base64,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"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);
