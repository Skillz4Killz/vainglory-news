import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Posts from '../constants/posts';

// const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];

export default () => {
  const newsToUse = [...Posts];
  return (
    <div>
      <div>
        <Carousel news={newsToUse.splice(0, 3)} />
        <div className="CardboxGroup">
          {newsToUse.map((item, index) => (
            <Card
              link={item.link}
              image={item.img}
              title={item.title}
              text={item.author}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
