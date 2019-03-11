import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

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
          <Link to="/" className='tab'>
            <img src={require('./../images/VGNews.png')} className="fas fa-newspaper navicon" /> Latest
          </Link>
        </li>
        <li>
          <Link to="/art" className='tab'>
            <img src={require('./../images/VGNews.png')} className="fas fa-palette navicon" /> Art
          </Link>
        </li>
        <li>
          <Link to="/guides" className='tab'>
            <img src={require('./../images/VGNews.png')} className="fas fa-lightbulb navicon" /> Guides
          </Link>
        </li>
        <li>
          <Link to="/esports" className='tab'>
            <img src={require('./../images/VGNews.png')} className="fas fa-trophy navicon" /> Esports
          </Link>
        </li>
        <li>
          <Link to="/tools" className='tab'>
            <img src={require('./../images/VGNews.png')} className="fas fa-tools navicon" /> Tools
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
