import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from "../components/HomePage"

export default () => (
  <Layout>
    <SEO title="Latest" keywords={[`vainglory`, `news`, `skillz4killz`]} />
    <HomePage />
  </Layout>
)
