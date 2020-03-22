import React, { useState } from "react"
import { Link } from "gatsby"
import "./styles.scss"
// import { rhythm, scale } from "../utils/typography"

const MENU_ITEMS = [
  { item: "Barbershop", link: "/barbershop" },
  { item: "About Us", link: "/about" },
  { item: "Gallery", link: "/gallery" },
  { item: "Reviews", link: "/testimonials" },
  { item: "Contact", link: "/contact" },
]

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="navWrapper">
      <div class="navBar">
        <Link className="menuLink rootMenuLink" to={`/`}>
          The Barber Haus NY
        </Link>
        <ul className="nav-mobile right rightSide">
          <li className="menuLink tablet">
            <Link to={`/`}>Barbershop</Link>
          </li>
          <li className="menuLink tablet">
            <Link to={`/about`}>About Us</Link>
          </li>
          <li className="menuLink tablet ">
            <Link to={`/`}>Gallery</Link>
          </li>
          <li className="menuLink desktop">
            <Link to={`/`}>Testimonial</Link>
          </li>
          <li className="menuLink desktop">
            <Link to={`/`}>Contact Us</Link>
          </li>
          <li className="menuLink dropdownButton">
            <a href="#" onClick={() => setShowDropdown(!showDropdown)}>
              <i class="material-icons">menu</i>
            </a>
            {showDropdown && (
              <ul className="collection dropdownMenu">
                <li className="menuLink dropdownLink showTablet">
                  <Link to={`/`}>Barbershop</Link>
                </li>
                <li className="menuLink dropdownLink showTablet">
                  <Link to={`/about`}>About Us</Link>
                </li>
                <li className="menuLink dropdownLink showTablet">
                  <Link to={`/`}>Gallery</Link>
                </li>
                <li className="menuLink dropdownLink">
                  <Link to={`/`}>Testimonial</Link>
                </li>
                <li className="menuLink dropdownLink">
                  <Link to={`/`}>Contact Us</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Layout = ({ location, title, children }) => {
  console.log(location)
  // const rootPath = `${__PATH_PREFIX__}/`
  // let header
  /*
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  */
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, The Barber Haus NY, Poughkeepsie NY
      </footer>
    </div>
  )
}

export default Layout
