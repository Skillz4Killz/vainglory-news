import Card from "./Card"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

const twitterAccounts = ["vainglory", "vainglorystatus"]
const StyledTwitterTimelineEmbed = styled(TwitterTimelineEmbed)`
background: #212427ad
`
export default () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        allMongodbProdPosts {
          edges {
            node {
              news {
                path
                author
                category
                image
                link
                title
              }
              localImage {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              id
              path
              author
              category
              image
              link
              messageID
              channelID
              title
              stream
            }
          }
        }
      }
    `}
    render={data => {
      const posts = data.allMongodbProdPosts.edges
        .map(edge => edge.node)
        .reverse()
      if (!posts || !posts.length) return null
      const officialNews = posts
        .filter(p => p.category === "official")
        .reverse()

      return (
        <div>
          <div>
            <h1 className="banner">Vainglory News</h1>
            <div className="CardboxGroup CardboxGroupLatest">
              {twitterAccounts.map((username, index) => (
                <div
                  className="selfCenter"
                  style={{ width: "320px", height: "225px", margin: 10, background:'#212427ad' }}
                  key={index}
                >
                  <StyledTwitterTimelineEmbed
                    sourceType="profile"
                    screenName={username}
                    autoHeight
                    theme="dark"
                    noHeader
                    noFooter
                    noBorders
                    noScrollbar
                    options={{background: 'transparent'}}
                  />
                </div>
              ))}
              {officialNews.map((item, index) => (
                <Card
                  link={item.link}
                  fixed={item.localImage.childImageSharp.fixed}
                  title={item.title}
                  text={item.author}
                  art={false}
                  official={true}
                  key={index}
                />
              ))}
            </div>
            <h1 className="banner2">Featured</h1>
            <div className="CardboxGroup CardboxGroupLatest">
              {posts
                .filter(p => !p.news && !p.stream && p.category !== "official")
                .slice(0, 12)
                .map((item, index) => (
                  <Card
                    link={item.link}
                    fixed={item.localImage.childImageSharp.fixed}
                    title={item.title}
                    text={item.author}
                    art={true}
                    key={index}
                  />
                ))}
            </div>
          </div>
        </div>
      )
    }}
  />
)
