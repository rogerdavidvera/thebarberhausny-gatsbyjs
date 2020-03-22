import React from "react"
// import { Link, graphql } from "gatsby"
import styles from "./styles.scss"
// import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Homepage = ({ data, location }) => {
  const imageUrl = data.contentfulAsset.resolutions.srcWebp
  const srcSet = data.contentfulAsset.resolutions.srcSet.split(",")
  const bigSize = srcSet[srcSet.length - 1].split(" ")[0]
  return (
    <>
      <SEO title="Welcome" />
      <Layout>
        <div className="homePageContainer">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
          <img className="image" src={bigSize} />
        </div>
      </Layout>
    </>
  )
}

export default Homepage

export const query = graphql`
  {
    __typename
    contentfulAsset(contentful_id: { eq: "2MNV59Y8qsyjye5tStFxSx" }) {
      resolutions {
        srcWebp
        srcSet
      }
    }
  }
`
