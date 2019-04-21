import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

export default function ({ pageContext }) {
  const feed = Object.values(pageContext)
  const category = feed[0].category
  if (!category) return null;
  return (
    <Layout>
      <SEO title={category.charAt(0).toUpperCase() + category.slice(1)} />
      <div className="CardboxGroup">
        {category === "tools"
          ? feed
            .map(a => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((tool, index) => (
              <Card
                link={tool.value.link}
                image={tool.value.image}
                title={tool.value.name}
                text={tool.value.description}
                key={index}
              />
            ))
          : feed
            .reverse()
            .map((card, index) => (
              <Card
                link={card.link}
                image={card.image}
                text={card.author}
                title={card.title}
                art={["art", "guides", "esports"].includes(
                  card.category.toLowerCase()
                )}
                key={index}
              />
            ))}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query AllPostsDocumentsPerPage($path: String!) {
    allMongodbProdPosts(filter: { path: { eq: $path } }) {
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
        }
      }
    }
  }
`
