import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';

const items = [
  {
    image:
      'https://cdn.discordapp.com/attachments/530862523562328083/542090576489742336/Ylva_splash.jpg',
    title: 'UPDATE 3.10: YLVA THE NORTHERN WOLF',
    text:
      'A northern huntress that stalks her prey while preparing the perfect ambush with stealth traps and surprising damage.',
  },
  {
    image:
      'https://jd3sljkvzi-flywheel.netdna-ssl.com/wp-content/uploads/2019/01/balance_article.jpg',
    title: 'UPDATE 3.10 HERO & ITEM BALANCE CHANGES',
    text: 'BY: SPACEMONKEY',
  },
  {
    image:
      'https://cdn.discordapp.com/attachments/530862523562328083/542090625760100382/Magnus_Standard.jpg',
    title: 'WINTER BATTLE PASS PROGRESS CHECK-IN',
    text:
      'Hey Vainglorians, we’re about one-third of the way through the Winter 2018-19 season. At the beginning of the season, we promised you that the new Battle Pass and Seasonal Progression systems would keep your Winter Sunlight-filled. Now that we’re a few weeks in, we thought we’d check in and give an update on what to expect for the remainder of the season.',
  },
];
export default class SimpleSlider extends React.Component {
  render() {
    return (
      <div>
        <Carousel
          autoplay
          pauseOnHover={false}
          swiping={true}
          transitionMode="fade"
          withoutControls={true}
          wrapAround={true}
          autoplayInterval={10000}
        >
          {items.map((item, index) => (
            <div className="carouselDiv" key={index}>
              <img src={item.image} alt={item.text} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
