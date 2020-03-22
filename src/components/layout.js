import React, { useState } from "react"
import { Link } from "gatsby"
import "./styles.scss"

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
            <Link to={`/barbershop`}>Barbershop</Link>
          </li>
          <li className="menuLink tablet">
            <Link to={`/about`}>About Us</Link>
          </li>
          <li className="menuLink tablet">
            <Link to={`/gallery`}>Gallery</Link>
          </li>
          <li className="menuLink desktop">
            <Link to={`/reviews`}>Reviews</Link>
          </li>
          <li className="menuLink desktop">
            <Link to={`/`}>Contact Us</Link>
          </li>
          <li className="menuLink dropdownButton">
            <a href="#" onClick={() => setShowDropdown(!showDropdown)}>
              <i class="material-icons menuIcon">menu</i>
            </a>
            <ul
              className={`collection dropdownMenu ${
                showDropdown ? "show" : "hide"
              }`}
            >
              <li className="menuLink dropdownLink showTablet">
                <Link to={`/barbershop`}>Barbershop</Link>
              </li>
              <li className="menuLink dropdownLink showTablet">
                <Link to={`/about`}>About Us</Link>
              </li>
              <li className="menuLink dropdownLink showTablet">
                <Link to={`/gallery`}>Gallery</Link>
              </li>
              <li className="menuLink dropdownLink">
                <Link to={`/reviews`}>Reviews</Link>
              </li>
              <li className="menuLink dropdownLink">
                <Link to={`/contact`}>Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const Layout = ({ location, title, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // let header
  return (
    <div class="pageContainer">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <NavBar />
      <main>{children}</main>
      <footer className="page-footer footerBar">
        © {new Date().getFullYear()}, The Barber Haus NY, Poughkeepsie, NY
      </footer>
    </div>
  )
}

export default Layout
