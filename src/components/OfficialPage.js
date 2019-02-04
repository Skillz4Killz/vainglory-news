import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Card from './Card';
import Carousel from './Carousel';

const tileData = [
  {
    img:
      'https://cdn.discordapp.com/attachments/530862523562328083/542090576489742336/Ylva_splash.jpg',
    title: '2018 VPL WORLD INVITATIONAL PRESENTED BY RAZER PHONE 2',
    author: 'BY: READYPLAYER1',
    link:
      'https://www.vainglorygame.com/news/2018-vpl-world-invitational-presented-razer-phone-2/',
  },
  {
    img:
      'https://cdn.discordapp.com/attachments/530862523562328083/542090625760100382/Magnus_Standard.jpg',
    title: 'UPDATE 3.9: MAGNUS THE ARCANE PRINCE',
    author: 'BY: SPACEMONKEY',
    link: 'https://www.vainglorygame.com/news/update-3-9-magnus-arcane-prince/',
  },
  {
    img:
      'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/12/balancenotes_article-1.jpg',
    title: 'UPDATE 3.9 HERO & ITEM BALANCE CHANGES',
    author: 'By: SPACEMONKEY',
    link:
      'https://www.vainglorygame.com/news/update-3-9-hero-item-balance-changes/',
  },
  {
    img:
      'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/12/battlepass_article.jpg',
    title: '3.9 WINTER BATTLE PASS: STAYING LIT',
    author: 'BY: SPACEMONKEY',
    link:
      'https://www.vainglorygame.com/news/3-9-winter-battle-pass-staying-lit/',
  },
  {
    img:
      'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/article_midpatchupdate-1.jpg',
    title: 'MID-UPDATE BALANCE REALIGNMENT',
    author: 'BY: WOLF_HANDS',
    link: 'https://www.vainglorygame.com/news/38midupdatebalance/',
  },
  {
    img:
      'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2018/11/article.jpg',
    title: 'SUNLIGHT FOR DARKENING DAYS',
    author: 'BY: READYPLAYER1',
    link: 'https://www.vainglorygame.com/news/sunlight-darkening-days/',
  },
];

const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];

export default () => (
  <div>
    <Carousel />
    <div className="CardboxGroup">
      {tileData.map((tile, index) => (
        <Card
          link={tile.link}
          image={tile.img}
          title={tile.title}
          text={tile.author}
          key={index}
        />
      ))}
    </div>
    <br />
    <br />
    <br />
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
);
