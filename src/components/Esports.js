import React, { Component } from 'react';
import Card from './Card';
import Carousel from './Carousel';

// const twitterAccounts = ['vainglory', 'vainglorystatus', 'vaingloryesport'];

export default class Esports extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [] };
  }

  async componentDidMount() {
    // const trelloJSON = await fetch
    //   .get(
    //     'https://trello.com/b/bfrj6QpF/community-tournaments-and-gatherings-supported-by-semc.json'
    //   )
    //   .onlyBody();

    // this.setState({
    //   news: trelloJSON
    //     ? trelloJSON.cards
    //         .filter(
    //           (card) =>
    //             !card.closed &&
    //             [
    //               '5bbbae2683cb922d57d25480',
    //               '5bd13ecf4c465844b94ea479',
    //             ].includes(card.idList)
    //         )
    //         .map((item) => ({
    //           author: item.desc,
    //           title: item.name.toUpperCase(),
    //           link: item.link,
    //           img: item.attachments.length
    //             ? item.attachments[0].url
    //             : 'https://trello-backgrounds.s3.amazonaws.com/5925f14fcd539dded207c1ea/2000x1500/fc08801c5213f52e4b473c4a3b073deb/Vainglory-5V5.jpg',
    //         }))
    //     : [],
    // });
  }

  render() {
    return (
      <div>
        {this.state.news.length ? (
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
        ) : null}
      </div>
    );
  }
}
