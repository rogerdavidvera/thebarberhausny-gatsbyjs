import React from "react"
// import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

const Homepage = ({ data, location }) => {
  return (
    <Layout>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <h1>
        Welcome to The Barber Haus NY, the best barbershop in town. YEEEEEEEE
        HAW!
      </h1>
    </Layout>
  )
}

export default Homepage
