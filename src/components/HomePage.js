import React, { Component } from "react"
import Card from "./Card"
import Posts from "../constants/posts"
import Parser from "rss-parser"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const twitterAccounts = ["vainglory", "vainglorystatus"]
const unofficialNews = Posts.filter(
  post =>
    post.category !== "official" && !["art", "meme"].includes(post.category)
)
let officialNews = []

export default class OfficialPage extends Component {
  constructor(props) {
    super(props)
    this.state = { news: [], tweets: [] }
  }

  async componentDidMount() {
    if (officialNews.length) return this.setState({ news: officialNews })
    // Note: some RSS feeds can't be loaded in the browser due to CORS security.
    // To get around this, you can use a proxy.
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
    const parser = new Parser()
    const feed = await parser.parseURL(
      CORS_PROXY + "https://www.vainglorygame.com/feed/"
    )

    officialNews =
      feed.items.map(item => ({
        author: `BY: ${item.creator.toUpperCase()} On ${item.pubDate.substring(
          0,
          item.pubDate.length - 15
        )}`,
        title: item.title.toUpperCase(),
        link: item.link,
        image:
          item["content:encoded"].indexOf('src="') >= 0
            ? item["content:encoded"].substring(
                item["content:encoded"].indexOf('src="') + 5,
                item["content:encoded"].indexOf('alt="') - 2
              )
            : "https://media.giphy.com/media/2uIfi72zJRvXKZNM1R/giphy.gif",
      })) || Posts.filter(post => post.category === "official")

    this.setState({ news: officialNews })
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="banner">Official</h1>
          <div className="CardboxGroup">
            {twitterAccounts.map((username, index) => (
              <div
                className="selfCenter"
                style={{ width: "320px", height: "225px", margin: 10 }}
                key={index}
              >
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName={username}
                  autoHeight
                  theme="dark"
                  noHeader
                  noFooter
                  noBorders
                  noScrollbar
                />
              </div>
            ))}
            {this.state.news.map((item, index) => (
              <Card
                link={item.link}
                image={item.image}
                title={item.title}
                text={item.author}
                key={index}
              />
            ))}
          </div>
          <h1 className="banner">Featured</h1>
          <div className="CardboxGroup">
            {unofficialNews.slice(0, 12).map((item, index) => (
              <Card
                link={item.link}
                image={item.image}
                title={item.title}
                text={item.author}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
