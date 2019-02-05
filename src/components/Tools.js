import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

const feed = [
  {
    author: 'BY: MysticCereal',
    title: 'You asked, and we deliver!',
    link: 'https://twitter.com/gloryguidevg/status/1092018243785523203?s=21',
    img: 'https://pbs.twimg.com/media/DyegxJUV4AEMi_R.jpg:large',
  },
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
  {
    author: 'BY: MYSTICCEREAL',
    title: 'Update 3.10 brought a fresh new UI change',
    link: 'https://twitter.com/gloryguidevg/status/1091540299917086720?s=21',
    img: 'https://pbs.twimg.com/media/DyXt9rGUUAAIUgt.jpg:large',
  },
  {
    author: 'BY: GENIUSAWESOME',
    title: 'Drafting 101: Hero Relevance, Power Spikes and Synergies (5V5)',
    link:
      'https://geniusawesome.pro/pro-tips/drafting-101-hero-relevance-power-spikes-and-synergies-5v5-carries-part-2',
    img:
      'https://geniusawesome.pro/wp-content/uploads/2019/01/carry-synergies-part-2-large.png',
  },
  {
    author: 'BY: SEAN',
    title: 'A Comprehensive Guide to Vainglory’s New Hero Ylva',
    link: 'https://twitter.com/teambrokenmyth/status/1088959333398994944',
    img: 'https://pbs.twimg.com/media/DxzCQq-X0AITwXy.jpg:large',
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
