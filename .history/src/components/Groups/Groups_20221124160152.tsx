import React from "react";

import { Avatar, Card } from "antd";
import "../Groups/Groups.css";

const { Meta } = Card;

export const Groups = () => (
  <div className="cards_container">
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="netflix"
          src="https://www.ceotech.it/wp-content/uploads/2022/05/Netflix-offre-a-pochi-laccesso-anticipato-a-film-e-serie.jpg"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        description="John Brown"
        title="Netflix"
      />
      <h2>Spaces Left: 12/20 </h2>
    </Card>
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="spotify"
          src="https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/04/spotify-logo-1920x1080-2.jpg"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Spotify"
        description="Michele Giordano"
      />
      <h2>Spaces Left: 5/15 </h2>
    </Card>
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://m-cdn.phonearena.com/images/article/140613-wide-two_350/iOS-16-adds-two-cool-new-features-to-the-Apple-Music-app.jpg?1654613357"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Apple Music"
        description="Tim Cook"
      />
      <h2>Spaces Left: 12/13 </h2>
    </Card>
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="apple_music"
          src="https://www.mondomobileweb.it/wp-content/uploads/2020/06/sky-fibra-logo.png"
        />
      }
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title="Sky"
        description="Maria Giussani"
      />
      <h2>Spaces Left: 2/10 </h2>
    </Card>
  </div>
);
