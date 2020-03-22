import React, { useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss"
import M from "materialize-css"

const createCards = ({ id, resolutions: { src } }) => (
  <div key={id}>
    <div class="card z-depth-2 hoverable">
      <div class="card-image center-align">
        <img src={src} class="materialboxed" />
      </div>
    </div>
  </div>
)

const GalleryPage = ({ pageContext: { contentful } }) => {
  const { heading, subHeading, gallery } = contentful

  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <>
      <SEO title={heading} description={subHeading} />
      <Layout>
        <div className="textContainer">
          <div className="container">
            <h2 className="section-title center-align heading">{heading}</h2>
            <div class="divider" />
            <h5 class="section-subtitle light center-align subheading">
              {subHeading}
            </h5>
          </div>
        </div>
        <div class="container">
          <div class="galleryGrid">{gallery.map(createCards)}</div>
        </div>
      </Layout>
    </>
  )
}

export default GalleryPage
