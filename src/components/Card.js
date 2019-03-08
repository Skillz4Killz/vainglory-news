import React from "react"
import "./Card.css"

export default props => (
  <span>
    <div className="Card">
      <a href={props.link}>
        <img src={props.image} alt={props.text} />
        <h3>{props.art ? null : props.title}</h3>
        <p style={props.art ? { top: "75px", marginLeft: "35%" } : {}}>
          {props.text}
        </p>
      </a>
    </div>
  </span>
)
