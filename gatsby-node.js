const path = require("path")

const organizedByCategory = allData => {
  const organized = {}

  for (const { node: data } of allData) {
    if (organized[data.category]) organized[data.category].push(data)
    else organized[data.category] = [data]
  }

  return Object.entries(organized)
}

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
            stream
            news {
              path
              author
              category
              image
              link
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)
    const organizedData = organizedByCategory(
      res.data.allMongodbProdPosts.edges
    )
    // console.log('where does this log', res.data.allMongodbProdPosts.edges)
    for (const data of organizedData) {
      if (data[0] && data[0].toLowerCase() === 'entertainment') continue;
      createPage({
        path: data[0],
        component: newsPageTemplate,
        context: data[1],
      })
    }
  })
}
