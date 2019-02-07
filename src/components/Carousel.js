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
          {item.video ? (
            <iframe
              src={item.link.replace('watch?v=', 'embed/')}
              title={index}
              width="100%"
              height="100%"
            />
          ) : (
            <a href={item.link}>
              <img src={item.img} alt={item.author} />
              <h3>
                {props.art
                  ? item.author.toUpperCase()
                  : item.title
                  ? item.title.toUpperCase()
                  : null}
              </h3>
              <p>{props.art ? item.title : item.author.toUpperCase()}</p>
            </a>
          )}
        </div>
      ))}
    </Carousel>
  </div>
);
