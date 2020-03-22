import React from "react"
import { graphql } from "gatsby"
import "./styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Homepage = ({ data, location }) => {
  const srcSet = data.contentfulAsset.resolutions.srcSet.split(",")
  const bigSize = srcSet[srcSet.length - 1].split(" ")[0]
  return (
    <>
      <SEO title="Welcome" />
      <Layout>
        <div className="homePageContainer">
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
