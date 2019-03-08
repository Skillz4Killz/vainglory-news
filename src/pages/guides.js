import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Posts from "../constants/posts"

const feed = Posts.filter(post =>
  ["youtube", "articles"].includes(post.category)
)
export default () => (
  <Layout>
    <SEO title="Esports" />
    <div className="CardboxGroup">
      {feed.map((tile, index) => (
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
