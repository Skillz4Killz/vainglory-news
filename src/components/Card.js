import React from "react"
import "./Card.css"

export default props => (
  <span>
    <div className="Card">
      <a href={props.link}>
        <img className='Image2' src={props.image} alt={props.text} />
        <img src={props.image} alt={props.text} />
        <h4 className={props.art ? "artTitle" : ""}>{props.title}</h4>
        <p style={props.art ? { top: "75px", marginLeft: "35%" } : {}}>
          {props.text}
        </p>
      </a>
    </div>
  </span>
)
