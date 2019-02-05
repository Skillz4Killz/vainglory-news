import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Card from './Card';
import Carousel from './Carousel';
import Parser from 'rss-parser';

const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];

export default class OfficialPage extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  async componentDidMount() {
    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const parser = new Parser();
    const feed = await parser.parseURL(
      CORS_PROXY + 'https://www.vainglorygame.com/feed/'
    );

    this.setState({
      news: feed.items.map((item) => ({
        author: `BY: ${item.creator.toUpperCase()} On ${item.pubDate.substring(
          0,
          item.pubDate.length - 15
        )}`,
        title: item.title.toUpperCase(),
        link: item.link,
        img:
          item['content:encoded'].indexOf('src="') >= 0
            ? item['content:encoded'].substring(
                item['content:encoded'].indexOf('src="') + 5,
                item['content:encoded'].indexOf('alt="') - 2
              )
            : 'https://thumbs.gfycat.com/SickTepidIndigowingedparrot-small.gif',
      })),
    });
  }

  render() {
    return (
      <div>
        <Carousel news={this.state.news.splice(0, 3)} />
        <div className="CardboxGroup">
          {this.state.news.map((tile, index) => (
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
    );
  }
}
