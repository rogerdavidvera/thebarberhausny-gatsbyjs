import React from "react"

const AboutPage = ({ pageContext: { contentful } }) => {
  const {
    pageHeading,
    subHeading: { subHeading },
    text: { text },
  } = contentful
  return (
    <>
      <h1>{pageHeading}</h1>
      <h2>{subHeading}</h2>
      <p>{text}</p>
    </>
  )
}

export default AboutPage
