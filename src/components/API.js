import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

const feed = [
  {
    author: 'BY: SKILLZ4KILLZ',
    title: 'G4M3R Contest Is Live!',
    link: 'https://support.g4m3r.xyz',
    img:
      'https://cdn.discordapp.com/attachments/410566372888674304/524996692295024641/Artboard_3_Copy_2.png',
  },
  {
    author: 'BY: 4EVER',
    title: "️We're ready for the  Northern Huntress",
    link: 'https://twitter.com/vgprogg/status/1089266233055293441',
    img: 'https://pbs.twimg.com/media/Dx3W54zXcAAhdKH.jpg',
  },
  {
    author: 'BY: SHUTTERFLY',
    title: 'Broken Talents Fun has been updated for 3.10',
    link: 'https://twitter.com/BrokenTalents/status/1088834072821010433',
    img: 'https://pbs.twimg.com/media/DxxQus6XgAYi1Qt.jpg:large',
  },
];

export default () => {
  const news = [...feed];
  return (
    <div>
      <div>
        <Carousel news={news.splice(0, 3)} />
        <div className="CardboxGroup">
          {news.map((tile, index) => (
            <Card
              link={tile.link}
              image={tile.img}
              title={tile.title}
              text={tile.author}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
