import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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

export default () => (
  <Carousel>
    {items.map((item) => (
      <Carousel.Item key={item.title}>
        <img
          className="d-block w-100"
          src={item.image}
          alt={`Carousel slide: ${item.description}`}
          height="450px"
          width="450px"
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
);
