import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

export default function({ pageContext }) {
  return (
    <Layout>
      <SEO title="Art" />
      <div className="CardboxGroup">
        {pageContext.edges.map(({ node: card }, index) => (
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
    allMongodbProdPosts(filter: { category: { eq: $path } }) {
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
