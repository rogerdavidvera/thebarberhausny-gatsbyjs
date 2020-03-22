import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const AboutPage = ({ pageContext: { contentful } }) => {
  const {
    pageHeading,
    subHeading: { subHeading },
    text: { text },
  } = contentful
  return (
    <>
      <SEO title={pageHeading} description={subHeading} />
      <Layout>
        <h1>{pageHeading}</h1>
        <h2>{subHeading}</h2>
        <p>{text}</p>
      </Layout>
    </>
  )
}

export default AboutPage
