const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
            continent
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
      deals: allContentfulDeal {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.deals.edges.forEach(({ node }) => {
    createPage({
      path: `deals/${node.slug}`,
      component: path.resolve("./src/templates/deal-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
