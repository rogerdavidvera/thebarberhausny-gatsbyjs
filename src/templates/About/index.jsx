import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss"
import Markdown from "@codecademy/gamut/dist/Markdown"

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
        <div className="textContainer">
          <div className="container">
            <h2 className="section-title center-align heading">
              {pageHeading}
            </h2>
            <div class="divider" />
            <h5 class="section-subtitle light center-align subheading">
              {subHeading}
            </h5>
          </div>
          <div class="container">
            <div className="container center-align"></div>

            <Markdown text={text}></Markdown>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage
