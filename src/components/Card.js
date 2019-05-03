import React from "react"
import "./Card.css"

export default props => (
  <a href={props.link}>
    <div className="Card">
        <img className='Image2' src={props.image} alt={props.text} />
      <img className= 'Image1' src={props.image} alt={props.text} />
        <div className='gradient'></div>
        <h4 className={props.art ? "artTitle" : "title"}>{props.official ? props.title : props.title ? props.title.substring(0, 30) : ''}</h4>
        <p className={props.official ? "officialAuthor" : "author"}>{props.text}</p>
</div>
  </a>
)
