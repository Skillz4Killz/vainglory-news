import React from "react"
import Card from "../components/Card"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
		query NewsPages {
			allMongodbProdPosts {
				edges {
					node {
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
      const feed = Object.values(pageContext)
      const category = feed[0].category
      if (!category) return null;
      const relevantData = data.allMongodbProdPosts.edges.filter(edge => edge.node.category === category);
      if (category === 'tools') console.log(relevantData[0])

      return (
        <Layout>
          <SEO title="Latest" keywords={[`vainglory`, `news`, `skillz4killz`]} />
          <div className="CardboxGroup">
            {category === "tools"
              ? relevantData
                .map(a => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((tool, index) => (
                  <Card
                    link={tool.value.node.link}
                    fixed={tool.value.node.localImage.childImageSharp ? tool.value.node.localImage.childImageSharp.fixed : null}
                    image={tool.value.node.image}
                    title={tool.value.node.name}
                    text={tool.value.node.description}
                    key={index}
                  />
                ))
              : relevantData
                .reverse()
                .map((card, index) => (
                  <Card
                    link={card.node.link}
                    fixed={card.node.localImage.childImageSharp ? card.node.localImage.childImageSharp.fixed : null}
                    image={card.node.image}
                    text={card.node.author}
                    title={card.node.title}
                    art={["art", "guides"].includes(card.node.category.toLowerCase())}
                    key={index}
                  />
                ))}
          </div>
        </Layout>
      )
    }}
  />
)
