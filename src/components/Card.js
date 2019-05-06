import React from "react"
import "./Card.css"
import GatsbyImage from "gatsby-image"
import styled from "styled-components"

const StyledGatsbyImage = styled(GatsbyImage)``

export default props => (
  <a href={props.link}>
    <div className="Card">
      {props.fixed ? (
        <StyledGatsbyImage
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
          }}
          fixed={props.fixed}
          imgStyle={{
            objectFit: "cover",
            filter:'blur(10px)'
          }}
        />
      ) : (
          <img src={props.image} alt={props.title} />
        )}

      {props.fixed ? (
        <StyledGatsbyImage
          style={{
            position: "relative",
            top: "0",
            width: "100%",
            height: "100%",
          }}
          fixed={props.fixed}
          imgStyle={{
            objectFit: "contain",
          }}
        />
      ) : (
        <img src={props.image} alt={props.title} />
      )}
      <div className="gradient" />
      <h4 className="title">
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
