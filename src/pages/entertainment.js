import Card from "../components/Card"
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
	<StaticQuery
		query={graphql`
		query EntertainmentPage {
			allMongodbProdPosts {
				edges {
					node {
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
			const entertainmentPosts = posts.filter(p => p.category && p.category.toLowerCase() === 'entertainment');
			const streams = entertainmentPosts.filter(p => p.stream);
			const notStreams = entertainmentPosts.filter(p => !p.stream);

			return (
				<Layout>
					<SEO title="Latest" keywords={[`vainglory`, `news`, `skillz4killz`]} />
					<div>
						{streams.length ? <h1 className="banner">Live Streams</h1> : null}
						{streams.length ? <div className="CardboxGroup">
							{streams.map((item, index) => (
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
						</div> : null}
						{streams.length ? <h1 className="banner">Entertainment</h1> : null}
						<div className="CardboxGroup">
							{notStreams.map((item, index) => (
								<Card
									link={item.link}
									image={item.image}
									title={item.title}
									text={item.author}
									art={true}
									key={index}
								/>
							))}
						</div>
					</div>
				</Layout >
			)
		}}
	/>
)
