const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const newsPageTemplate = path.resolve("src/templates/news-pages.js")

  return graphql(`
    {
      allMongodbProdPosts {
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    for (const { node } of res.data.allMongodbProdPosts.edges)
      createPage({
        path: node.frontmatter.path,
        component: newsPageTemplate,
      })
  })
}
