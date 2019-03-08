const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const newsPageTemplate = path.resolve("src/templates/news-pages.js")

  return graphql(`
    {
      allMongodbProdPosts {
        edges {
          node {
            id
            author
            category
            path
            image
            link
            messageID
            channelID
            title
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    res.data.allMongodbProdPosts.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: newsPageTemplate,
        context: res.data.allMongodbProdPosts,
      })
    })
  })
}
