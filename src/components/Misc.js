import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

const feed = [
  {
    author: 'BY: WIXOSS',
    title: 'Mid Lane Skaarf Gameplay 3.10 (Vainglory 5v5 Ranked)',
    link: 'https://youtu.be/AmAII0PIHe0',
    img:
      'https://images-ext-1.discordapp.net/external/Cy8AivYsBhUrXBOZ68ceR42S0KmuL-JHD8XdcetEwNM/https/i.ytimg.com/vi/AmAII0PIHe0/maxresdefault.jpg',
  },
  {
    author: 'BY: KDALS',
    title: 'Making the Meta | CP Gwen | T10 PC Gameplay',
    link: 'https://youtu.be/n8YZMGibuVg',
    img:
      'https://images-ext-1.discordapp.net/external/ftJiGzIFfrnpxvYBnWPB1GCCzLU36q91FChLGMkdcpE/https/i.ytimg.com/vi/n8YZMGibuVg/hqdefault.jpg',
  },
  {
    author: 'BY: KDALS',
    title: '3.10 In Depth Overview | Stat Changes, Possible Metas?',
    link: 'https://youtu.be/9nZuvT4zYdg',
    img:
      'https://images-ext-2.discordapp.net/external/2PCyDTNt542_NwpfjNTIT9zkaP31Q7CW3xc-tNdrjJE/https/i.ytimg.com/vi/9nZuvT4zYdg/maxresdefault.jpg',
  },
  {
    author: 'BY: MAXMAN30',
    title: 'Ylva | 3.10 Gameplay showcase - Vainglory 5v5',
    link: 'https://www.youtube.com/watch?v=mi8OZt4LPJ8&feature=youtu.be',
    img:
      'https://images-ext-2.discordapp.net/external/64F6cf1fLVIDLvtr7Ql0BicBjx8amYJDrBGmGIeNPUg/https/i.ytimg.com/vi/mi8OZt4LPJ8/hqdefault.jpg',
  },
  {
    author: 'BY: MAXMAN30',
    title: 'Tony, my one love ♥️ - Vainglory 5v5',
    link: 'https://youtu.be/Hy609qydGGI',
    img:
      'https://images-ext-1.discordapp.net/external/6wZ5lJng0pPtVyMxLBKIn_TdEQIA4JhVbtY1px17Y78/https/i.ytimg.com/vi/Hy609qydGGI/maxresdefault.jpg',
  },
  {
    author: 'BY: MAXMAN30',
    title: 'How to Magnus! - Vainglory 5v5',
    link: 'https://www.youtube.com/watch?v=fSHVXYj5No0&t=340s',
    img:
      'https://images-ext-2.discordapp.net/external/WVrREtx_q5-FVDNDJDQOL2jA9QrBJuZRIEJWab8In2Y/https/i.ytimg.com/vi/fSHVXYj5No0/maxresdefault.jpg',
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
