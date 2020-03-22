const slash = require("slash")
const path = require("path")

const getAboutPage = graphql => {
  return graphql(
    `
      {
        contentfulAboutPage {
          pageHeading
          subHeading {
            subHeading
          }
          text {
            text
          }
        }
      }
    `
  )
}

const createAboutPage = async (graphql, actions) => {
  const { createPage } = actions

  const aboutTemplate = path.resolve(`./src/templates/About/index.jsx`)

  const graphQLResponse = await getAboutPage(graphql)

  createPage({
    path: "/about",
    component: slash(aboutTemplate),
    context: {
      contentful: graphQLResponse.data.contentfulAboutPage,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  return createAboutPage(graphql, actions)
}
