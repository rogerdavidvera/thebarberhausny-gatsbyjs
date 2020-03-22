import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./styles.scss"

const ContactPage = ({ pageContext: { contentful } }) => {
  const {
    heading,
    subHeading,
    description,
    address,
    hours,
    phoneNumber,
    facebookUrl,
    instagramHandle,
    instagramLogo: { resolutions: igLogo },
    facebookLogo: { resolutions: fbLogo },
  } = contentful

  return (
    <>
      <SEO title={heading} description={subHeading} />
      <Layout>
        <div className="textContainer">
          <div className="container">
            <h2 className="section-title center-align heading">{heading}</h2>
            <div class="divider" />
            <h5
              class="section-subtitle light center-align subheading"
              style={{ paddingBottom: "0.75rem" }}
            >
              {subHeading}
            </h5>
            <div className="container center-align">
              <p className="contactDescription">{description}</p>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container row">
            <div class="container col s12 m12 l6 z-depth-0">
              <div class="overlay"></div>
              <iframe
                class="z-depth-5"
                width="100%"
                height="420"
                frameBorder="0"
                scrolling="no"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0FmNaRrBxN8niCJBO7rEz14jU3_TN7Z0
    &q=Barber+Haus+NY,Poughkeepsie,+NY,+United+States
    &maptype=satellite"
                allowFullScreen
              ></iframe>
            </div>
            <div class="container col s12 m12 l6">
              <div class="section-2">
                <h5 className="contactSectionHeading">
                  Location<i class="material-icons right">place</i>
                </h5>
                <p class="center-align red-text text-darken-4 contactSectionText">
                  {address}
                  <br />
                  <small>(Wheelchair Accessible)</small>
                </p>
              </div>
              <div class="divider"></div>
              <div class="section-2">
                <h5 className="contactSectionHeading">
                  Hours<i class="material-icons right">access_time</i>
                </h5>
                <p class="center-align red-text text-darken-4 contactSectionText">
                  {hours.map(hour => (
                    <div key={hour}>{hour}</div>
                  ))}
                </p>
              </div>
              <div class="divider"></div>

              <div class="section-2 phoneNumber">
                <h5 className="contactSectionHeading">
                  Phone Number<i class="material-icons right">phone</i>
                </h5>
                <div class="center-align">
                  <a
                    class="red-text text-darken-4 contactSectionText"
                    href="tel:845-486-4287"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div class="divider"></div>

              <div class="section-2">
                <h5 className="contactSectionHeading">
                  Follow us on social media
                </h5>
                <div class="row section-2">
                  <div class="col s6 left-align">
                    <a
                      href={facebookUrl}
                      target="_blank"
                      class="red-text text-darken-4 contactSectionText socialMediaContainer"
                    >
                      <img
                        class="zresponsive-img icon socialMediaIcon"
                        src={fbLogo.src}
                        alt="Facebook Logo"
                      />
                      <div className="socialMediaLabel">Facebook</div>
                    </a>
                  </div>

                  <div class="col s6 left-align">
                    <a
                      href={`https://www.instagram.com/${instagramHandle}`}
                      target="_blank"
                      class="red-text text-darken-4 contactSectionText socialMediaContainer"
                    >
                      <img
                        class="center-align icon socialMediaIcon"
                        src={igLogo.src}
                        alt="Instagram Logo"
                      />
                      <div className="socialMediaLabel">Instagram</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
