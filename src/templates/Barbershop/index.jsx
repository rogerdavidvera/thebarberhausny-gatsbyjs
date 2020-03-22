import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss"
import Markdown from "@codecademy/gamut/dist/Markdown"

const createCards = ({
  name,
  description,
  disclaimer,
  image: {
    id,
    resolutions: { src },
  },
}) => (
  <div key={id} class="col s12 m4">
    <div class="card z-depth-2">
      <div class="card-image">
        <img src={src} />
        <span class="card-title center-align">{name}</span>
      </div>
      <div class="card-content center-align">
        <p class="flow-text">{description}</p>
        <br />
        {disclaimer && <small>{disclaimer}</small>}
      </div>
    </div>
  </div>
)

const BarbershopPage = ({ pageContext: { contentful } }) => {
  const {
    heading,
    subHeading: { subHeading },
    services: services,
  } = contentful
  return (
    <>
      <SEO title={heading} description={subHeading} />
      <Layout>
        <div className="textContainer">
          <div className="container">
            <h2 className="section-title center-align heading">{heading}</h2>
            <div class="divider" />
            <h5 class="section-subtitle light center-align subheading">
              {console.log(services)}
            </h5>
          </div>
        </div>
        <div class="container">
          <div class="row">{services.map(createCards)}</div>
        </div>
      </Layout>
    </>
  )
}

export default BarbershopPage
