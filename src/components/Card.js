import React from "react"
import "./Card.css"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"

const StyledGatsbyImage = styled(GatsbyImage)`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%) translateY(-0%);
  width: 100%;
  height: 100%;
`

export default props => (
  <a href={props.link}>
    <div className="Card">
      {/*props.fixed
        ? (<GatsbyImage className="image2" fixed={props.fixed} />)
        : (<img className="image2" src={props.image} alt={props.title} />)
      */}
      {props.fixed ? (
        <StyledGatsbyImage className="Image1" fixed={props.fixed} />
      ) : (
        <img className="Image1" src={props.image} alt={props.title} />
      )}
      <div className="gradient" />
      <h4 className={props.art ? "artTitle" : "title"}>
        {props.official
          ? props.title
          : props.title
          ? props.title.substring(0, 30)
          : ""}
      </h4>
      <p className={props.official ? "officialAuthor" : "author"}>
        {props.text}
      </p>
    </div>
  </a>
)
