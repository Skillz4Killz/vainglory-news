import React from "react"
import "./Card.css"

export default props => (
  <span>
    <div className="Card">
      <a href={props.link}>
        <img className='Image2' src={props.image} alt={props.text} />
        <img src={props.image} alt={props.text} />
        <h4 className={props.art ? "artTitle" : "title"}>{props.title}</h4>
        <p className={props.official ? "officialAuthor" : "author"}>{props.text}</p>
      </a>
    </div>
  </span>
)
