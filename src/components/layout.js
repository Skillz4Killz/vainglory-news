/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            <p
              style={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "12px",
                textShadow: "2px 2px 20px black",
                marginLeft: "16px",
                textAlign: "center"
              }}
            >
              All submissions are made by users. All rights belong to the
              original creators. If someone submitted your work without
              permission or you want to submit content, join
              <a href="https://discord.gg/5za7RgF" style={{ color: "orange" }}>
                {" "}
                Discord.
              </a>
            </p>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
