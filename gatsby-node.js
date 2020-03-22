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
const getBarbershopPage = graphql => {
  return graphql(
    `
      {
        contentfulBarbershopPage {
          heading
          subHeading {
            subHeading
          }
          services {
            name
            description
            disclaimer
            image {
              id
              resolutions {
                src
              }
            }
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

const createBarbershopPage = async (graphql, actions) => {
  const { createPage } = actions

  const barbershopTemplate = path.resolve(
    `./src/templates/Barbershop/index.jsx`
  )

  const graphQLResponse = await getBarbershopPage(graphql)

  createPage({
    path: "/barbershop",
    component: slash(barbershopTemplate),
    context: {
      contentful: graphQLResponse.data.contentfulBarbershopPage,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  createBarbershopPage(graphql, actions)
  return createAboutPage(graphql, actions)
}
