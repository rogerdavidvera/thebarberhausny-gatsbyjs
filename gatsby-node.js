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
const getGalleryPage = graphql => {
  return graphql(
    `
      {
        contentfulGalleryPage {
          heading
          subHeading
          gallery {
            id
            resolutions {
              src
            }
          }
          slideshow {
            id
            resolutions {
              src
            }
          }
        }
      }
    `
  )
}
const getReviewsPage = graphql => {
  return graphql(
    `
      {
        contentfulReviewsPage {
          heading
          subHeading
        }
      }
    `
  )
}
const getContactPage = graphql => {
  return graphql(
    `
      {
        contentfulContactPage {
          heading
          subHeading
          description
          address
          hours
          phoneNumber
          facebookUrl
          instagramHandle
          instagramLogo {
            resolutions {
              src
            }
          }
          facebookLogo {
            resolutions {
              src
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

const createGalleryPage = async (graphql, actions) => {
  const { createPage } = actions

  const galleryTemplate = path.resolve(`./src/templates/Gallery/index.jsx`)

  const graphQLResponse = await getGalleryPage(graphql)

  createPage({
    path: "/gallery",
    component: slash(galleryTemplate),
    context: {
      contentful: graphQLResponse.data.contentfulGalleryPage,
    },
  })
}

const createReviewsPage = async (graphql, actions) => {
  const { createPage } = actions

  const reviewsTemplate = path.resolve(`./src/templates/Reviews/index.jsx`)

  const graphQLResponse = await getReviewsPage(graphql)

  createPage({
    path: "/reviews",
    component: slash(reviewsTemplate),
    context: {
      contentful: graphQLResponse.data.contentfulReviewsPage,
    },
  })
}

const createContactPage = async (graphql, actions) => {
  const { createPage } = actions

  const contactTemplate = path.resolve(`./src/templates/Contact/index.jsx`)

  const graphQLResponse = await getContactPage(graphql)

  createPage({
    path: "/contact",
    component: slash(contactTemplate),
    context: {
      contentful: graphQLResponse.data.contentfulContactPage,
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  createContactPage(graphql, actions)
  createReviewsPage(graphql, actions)
  createGalleryPage(graphql, actions)
  createBarbershopPage(graphql, actions)
  return createAboutPage(graphql, actions)
}
