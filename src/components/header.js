import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        background: "rgb(43, 43, 45)",
        paddingTop: "10px",
        textDecoration: "none",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">
            <i className="fas fa-newspaper navicon" /> Latest
          </Link>
        </li>
        <li>
          <Link to="/art">
            <i className="fas fa-palette navicon" /> Art
          </Link>
        </li>
        <li>
          <Link to="/guides">
            <i className="fas fa-lightbulb navicon" /> Guides
          </Link>
        </li>
        <li>
          <Link to="/esports">
            <i className="fas fa-trophy navicon" /> Esports
          </Link>
        </li>
        <li>
          <Link to="/tools">
            <i className="fas fa-tools navicon" /> Tools
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
