import React from "react"
import { graphql } from "gatsby"

export default function({ data }) {
  return (
    <Layout>
      <SEO title="Art" />
      <div className="CardboxGroup">
        {data.frontmatter.feed.map((tile, index) => (
          <Card
            link={tile.link}
            image={tile.image}
            text={tile.author}
            art={true}
            key={index}
          />
        ))}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query AllPostsDocumentsPerPage($path: String!) {
    allMongodbProdPosts(category: { eq: $path }) {
      edges {
        node {
          frontmatter {
            error
            name
            path
          }
        }
      }
    }
  }
`
