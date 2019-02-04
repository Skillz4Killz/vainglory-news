import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Card from './Card';
import Carousel from './Carousel';

const tileData = [
  {
    img: 'https://i.imgur.com/drvfUN9.png',
    title: 'UPDATE 3.10: YLVA THE NORTHERN WOLF',
    author: 'SPACEMONKEY',
  },
  {
    img: 'https://i.imgur.com/53xvhuI.jpg',
    title: '3.9 Update Notes',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/tgoxhWU.jpg',
    title: 'Fan Art/Meme: Enemies Of Our Nation',
    author: 'By: Maxman30',
  },
  {
    img: 'https://i.imgur.com/54eKwIx.gif',
    title: 'Broken Myth: Ylva News Article Title',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/53xvhuI.jpg',
    title: '3.9 Update Notes',
    author: 'Short Description',
  },
  {
    img: 'https://i.imgur.com/53xvhuI.jpg',
    title: '3.9 Update Notes',
    author: 'Short Description',
  },
];

const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];

export default (props) => (
  <div>
    <Carousel />
    <div className="CardboxGroup">
      {tileData.map((tile, index) => (
        <Card
          link={tile.link}
          image={tile.img}
          title={tile.title}
          text={tile.text}
          key={index}
        />
      ))}

      {twitterAccounts.map((account) => (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={account}
          theme="dark"
          noHeader
          noFooter
          noScrollbar
          options={{ height: 400 }}
          key={account}
        />
      ))}
    </div>
  </div>
);
