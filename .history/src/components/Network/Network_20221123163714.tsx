import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

export const Network = () => (
  <div className="cards_container">
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
          src="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg"
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
          src="https://m-cdn.phonearena.com/images/article/140613-wide-two_350/iOS-16-adds-two-cool-new-features-to-the-Apple-Music-app.jpg?1654613357"
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
          src="https://m-cdn.phonearena.com/images/article/140613-wide-two_350/iOS-16-adds-two-cool-new-features-to-the-Apple-Music-app.jpg?1654613357"
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
  </div>
);
