import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Tools from '../constants/tools';
import Posts from '../constants/posts';

const news = Posts.filter((post) => post.category === 'tools');

export default () => (
  <div>
    <div>
      <Carousel news={news.slice(0, 3)} />
      <div className="CardboxGroup">
        {Tools.map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((tool, index) => (
            <Card
              link={tool.value.link}
              image={tool.value.image}
              title={tool.value.name}
              text={tool.value.description}
              key={index}
            />
          ))}
      </div>
    </div>
  </div>
);
