import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Tools from "../constants/tools"

export default () => (
  <Layout>
    <SEO title="Esports" />
    <div className="CardboxGroup">
      {Tools.map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((tool, index) => (
          <Card
            link={tool.value.link}
            image={tool.value.image}
            title={tool.value.name}
            text={tool.value.description}
            key={index}
          />
        ))}
    </div>
  </Layout>
)
