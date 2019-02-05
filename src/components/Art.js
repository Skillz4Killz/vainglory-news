import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

const feed = [
  {
    author: 'BY: OWLET',
    link: 'http://instagram.com/owolet',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/478050609229201410/image.png',
    title:
      "They're a student who loves anime and games, hoping to study animation in the future. They're primarily on Instagram so check their works out",
  },
  {
    author: 'BY: Vena',
    link: 'http://twitter.com/Avacyr6',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/471834817919451149/image.png',
    title:
      'They are a college student who has been doing digital art for approx. 3 years and also some animation on the side. They love doing collaborations with other artists so count them in if anything is being planned!',
  },
  {
    author: 'BY: DeltaBaka',
    link: 'https://twitter.com/DELTABaka',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/409794392195596289/image.jpg',
    title:
      'DeltaBaka is a VG8 commentator, Twitch streamer, and aspiring artist. He’s been drawing traditional art since 2011 and recently picked up digital art. His current focus is fan art of video game/anime/manga characters.',
  },
  {
    author: 'BY: PIXIEMETHOD',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/333267755102896129/PixieMethod.png',
    link: 'http://www.twitch.tv/pixiemethod',
  },
  {
    author: 'BY: Ollard',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/297355323642085387/Screen_Shot_2017-03-31_at_9.03.26_AM.png',
    link: 'https://twitter.com/BroadwayLine',
    title:
      'Streams on twitch.tv/diffidxnce and picarto.tv/acidloop from time to time. They mostly use Twitter for posting VG art.',
  },
  {
    author: 'BY: KAZOLIN_',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/277622680092409856/Screen_Shot_2017-02-04_at_9.13.09_PM.png',
    link: 'https://twitter.com/diffidxnce',
  },
  {
    author: 'By: Phrog',
    img:
      'https://cdn.discordapp.com/attachments/264404408102682624/277196285444882442/phrog.png',
    link: 'https://twitter.com/Phrog_Frog',
    title:
      "I'm an artist that's not an artist. Basically, you know how if you're in an art class, and there are those people complaining how they're not good at this or they're not good at that? I'm one of those people. The only difference between me and those people are the fact that I am extremely determined at doing things. TL;DR: I'm a normal person armed with determination and an undo button.",
  },
];

export default () => {
  const news = [...feed];
  return (
    <div>
      <div>
        <Carousel news={news.splice(0, 3)} art={true} />

        <div className="CardboxGroup">
          {news.map((tile, index) => (
            <Card
              link={tile.link}
              image={tile.img}
              title={tile.title}
              text={tile.author}
              key={index}
              art={true}
            />
          ))}
        </div>
        <p className="artFooter">
          All submissions are made by users. All rights belong to the original
          creators. If someone has submitted your work without your permission,
          please contact us on{' '}
          <a href="https://discord.gg/5za7RgF"> Discord.</a>
        </p>
      </div>
    </div>
  );
};
