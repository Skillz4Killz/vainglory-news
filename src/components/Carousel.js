import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';

const items = [
  {
    image: 'https://i.imgur.com/6lnKcRR.gif',
    title: 'G4M3R Contest Is Live!',
    text:
      'Be the top 3 active people on the discord server and unlock cool prizes every update!',
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
        className="carousel"
        autoplayInterval={5000}
      >
        <div className="carousel">
          <h3>testing text</h3>
          <img src={items[0].image} alt={items[0].text} />
        </div>
        
        <img src={items[1].image} alt={items[1].text} className="carousel" />
      </Carousel>
    );
  }
}
