import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';

const items = [
  {
    image: 'https://i.imgur.com/5zOBk6c.jpg',
    title: 'UPDATE 3.10: YLVA THE NORTHERN WOLF',
    text:
      'A northern huntress that stalks her prey while preparing the perfect ambush with stealth traps and surprising damage.',
  },
  {
    image: 'https://i.imgur.com/rPlobei.png',
    title: 'G4M3R Giveaway Finished!',
    text: 'The winners are a, b and c!',
  },
  {
    image: 'https://i.imgur.com/53xvhuI.jpg',
    title: 'Magnus Is Live!',
    text: 'Play Magnus Now! Read all about it!',
  },
];
export default class SimpleSlider extends React.Component {
  render() {
    return (
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
    );
  }
}
