import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

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
          <Link to="/" className="tab">
            <img
              src={require("./../images/newspaper-solid.svg")}
              className="navbarIcons"
            />{" "}
            Latest
          </Link>
        </li>
        <li>
          <Link to="/art" className="tab">
            <img src={require("./../images/palette-solid.svg")} /> Art
          </Link>
        </li>
        <li>
          <Link to="/guides" className="tab">
            <img
              src={require("./../images/lightbulb-solid.svg")}
              className="fas fa-lightbulb navicon"
            />{" "}
            Guides
          </Link>
        </li>
        <li>
          <Link to="/esports" className="tab">
            <img
              src={require("./../images/trophy-solid.svg")}
              className="fas fa-trophy navicon"
            />{" "}
            Esports
          </Link>
        </li>
        <li>
          <Link to="/tools" className="tab">
            <img
              src={require("./../images/tools-solid.svg")}
              className="fas fa-tools navicon"
            />{" "}
            Tools
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
