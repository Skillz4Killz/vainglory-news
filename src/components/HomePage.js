import Card from "./Card"
import { TwitterTimelineEmbed } from "react-twitter-embed"
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const twitterAccounts = ["vainglory", "vainglorystatus"]

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
			const posts = data.allMongodbProdPosts.edges.map(edge => edge.node).reverse();
			if (!posts || !posts.length) return null;
			const officialNews = posts.find(p => p.news);
			return (
				<div>
					<div>
						<h1 className="banner">Vainglory News</h1>
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
							{officialNews.news.map((item, index) => (
								<Card
									link={item.link}
									image={item.image}
									title={item.title}
									text={item.author}
									art={false}
									official={true}
									key={index}
								/>
							))}
						</div>
						<h1 className="banner">Featured</h1>
						<div className="CardboxGroup">
							{posts.filter(p => !p.news && !p.stream).slice(0, 12).map((item, index) => (
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
