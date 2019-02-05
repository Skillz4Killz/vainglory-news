import React from 'react';
import Carousel from 'nuka-carousel';
import './Carousel.css';

export default (props) => (
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
      {props.news.map((item, index) => (
        <div className="carouselDiv" key={index}>
          <img src={item.img} alt={item.author} />
          <h3>{item.title}</h3>
          <p>{item.author}</p>
        </div>
      ))}
    </Carousel>
  </div>
);
