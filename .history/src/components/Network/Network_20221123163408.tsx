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
        src="https://i0.wp.com/images.liveuniversity.it/sites/2/2022/09/uscite-netflix.jpeg?fit=990%2C646&ssl=1"
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
  <Card
  style={{ width: 300 }}
  cover={
    <img
      alt="example"
      src="https://i0.wp.com/images.liveuniversity.it/sites/2/2022/09/uscite-netflix.jpeg?fit=990%2C646&ssl=1"
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
