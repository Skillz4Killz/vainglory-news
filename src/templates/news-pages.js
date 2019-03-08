import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

export default function({ pageContext }) {
  const feed = Object.values(pageContext)

  return (
    <Layout>
      <SEO title="Art" />
      <div className="CardboxGroup">
        {feed.map((card, index) => (
          <Card
            link={card.link}
            image={card.image}
            text={card.author}
            art={["art", "videos"].includes(card.category)}
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
