import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import M from "materialize-css"
import Markdown from "@codecademy/gamut/dist/Markdown"

const SitewideBanner = () => {
  const {
    contentfulSitewideBanner: {
      heading,
      message: { message },
      showBanner,
    },
  } = useStaticQuery(
    graphql`
      query BannerQuery {
        contentfulSitewideBanner {
          heading
          message {
            message
          }
          showBanner
        }
      }
    `
  )

  useEffect(() => {
    const elems = document.querySelectorAll(".modal")
    const modal = M.Modal.init(elems)[0]
    if (modal) {
      modal.open()
    }
  }, [])

  const showModal = sessionStorage.getItem("showModal")

  if (showBanner && !!showModal) {
    return (
      <div class="modal">
        <div class="modal-content center-align">
          <h4 className="red-text text-darken-1">{heading}</h4>
          <div class="divider"></div>
          <Markdown className="section" text={message}></Markdown>
        </div>
        <div class="modal-footer">
          <button
            href="#!"
            class=" modal-action modal-close waves-effect waves-green btn-flat"
            onClick={() => sessionStorage.removeItem("showModal")}
          >
            Close Message
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default SitewideBanner
