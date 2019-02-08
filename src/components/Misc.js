import React from 'react';
import Card from './Card';

const feed = [
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1075918783728869378/photo/1',
    img: 'https://i.imgur.com/S0jNxPv.jpg',
  },
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1063959975712632832/photo/1',
    img: 'https://i.imgur.com/cWlMDmz.jpg',
    title: 'The Dream...',
  },
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1065409527741366272/photo/1',
    img: 'https://i.imgur.com/m9MzpQ6.jpg',
  },
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1071555021731520512/photo/1',
    img: 'https://i.imgur.com/yYKYm7o.jpg',
  },
  {
    author: 'BY: Epic VG',
    link: 'https://mobile.twitter.com/EZL_Official/status/1072522484283568129',
    img: 'https://i.imgur.com/5dpNhrf.jpg',
  },
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1057044410515374081/photo/1',
    img: 'https://i.imgur.com/fZPDLay.jpg',
  },
  {
    author: 'BY: Epic VG',
    link:
      'https://mobile.twitter.com/EZL_Official/status/1074106837186813952/photo/1',
    img: 'https://i.imgur.com/J5Ei4c9.jpg',
  },
  {
    link:
      'https://mobile.twitter.com/EZL_Official/status/1068308630183628801/photo/1',
    img: 'https://i.imgur.com/lVaHpn3.jpg',
  },
  {
    link:
      'https://mobile.twitter.com/EZL_Official/status/1066859080847785984/photo/1',
    img: 'https://i.imgur.com/oWHZlTK.jpg',
  },
  {
    author: 'BY: MAXMAN30',
    link:
      'https://cdn.discordapp.com/attachments/458727216117973012/539959443832438785/KennedyBannerMeme.jpg',
    img:
      'https://cdn.discordapp.com/attachments/458727216117973012/539959443832438785/KennedyBannerMeme.jpg',
    title: 'Enemy Of The Nation!',
  },
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
  {
    author: 'BY: WIXOSS',
    title: 'Mid Lane Skaarf Gameplay 3.10 (Vainglory 5v5 Ranked)',
    link: 'https://www.youtube.com/watch?v=AmAII0PIHe0',
    img:
      'https://images-ext-1.discordapp.net/external/Cy8AivYsBhUrXBOZ68ceR42S0KmuL-JHD8XdcetEwNM/https/i.ytimg.com/vi/AmAII0PIHe0/maxresdefault.jpg',
    video: true,
  },
  {
    author: 'BY: KDALS',
    title: 'Making the Meta | CP Gwen | T10 PC Gameplay',
    link: 'https://www.youtube.com/watch?v=n8YZMGibuVg',
    img:
      'https://images-ext-1.discordapp.net/external/ftJiGzIFfrnpxvYBnWPB1GCCzLU36q91FChLGMkdcpE/https/i.ytimg.com/vi/n8YZMGibuVg/hqdefault.jpg',
    video: true,
  },
  {
    author: 'BY: KDALS',
    title: '3.10 In Depth Overview | Stat Changes, Possible Metas?',
    link: 'https://www.youtube.com/watch?v=9nZuvT4zYdg',
    img:
      'https://images-ext-2.discordapp.net/external/2PCyDTNt542_NwpfjNTIT9zkaP31Q7CW3xc-tNdrjJE/https/i.ytimg.com/vi/9nZuvT4zYdg/maxresdefault.jpg',
    video: true,
  },
  {
    author: 'BY: MAXMAN30',
    title: 'Ylva | 3.10 Gameplay showcase - Vainglory 5v5',
    link: 'https://www.youtube.com/watch?v=mi8OZt4LPJ8&feature=youtu.be',
    img:
      'https://images-ext-2.discordapp.net/external/64F6cf1fLVIDLvtr7Ql0BicBjx8amYJDrBGmGIeNPUg/https/i.ytimg.com/vi/mi8OZt4LPJ8/hqdefault.jpg',
    video: true,
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

export default () => (
  <div className="CardboxGroup" style={{ paddingTop: '75px' }}>
    {feed.map((tile, index) => (
      <Card
        link={tile.link}
        image={tile.img}
        title={tile.title}
        text={tile.author}
        key={index}
      />
    ))}
    <p className="artFooter">
      All submissions are made by users. All rights belong to the original
      creators. If someone has submitted your work without your permission,
      please contact us on <a href="https://discord.gg/5za7RgF"> Discord.</a>
    </p>
  </div>
);
