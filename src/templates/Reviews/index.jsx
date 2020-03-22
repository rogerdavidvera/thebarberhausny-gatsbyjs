import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss"

const ReviewsPage = ({ pageContext: { contentful } }) => {
  const { heading, subHeading } = contentful

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
          <div class="section">
            <div class="row">
              <div class="container col s12 zm6">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1140845772769425%26id%3D100005320395682&width=auto"
                  width="100%"
                  height="500"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                ></iframe>
              </div>

              <div class="container col s12 zm6">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkathi.ledermanmiller%2Fposts%2F10218448550457293&width=auto"
                  width="100%"
                  height="140"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                ></iframe>
              </div>

              <div class="container col s12 zm6">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fryan.miller.940436%2Fposts%2F10214005981396509&width=auto"
                  width="100%"
                  height="540"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                ></iframe>
              </div>

              <div class="container col s12 zm6">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbill.richardson.5209%2Fposts%2F10217747387982433&width=auto"
                  width="100%"
                  height="180"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                ></iframe>
              </div>

              <div class="col s12">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fteatimewithstacey%2Fposts%2F10212415320479636%3A0&width=auto"
                  width="100%"
                  height="400"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ReviewsPage
