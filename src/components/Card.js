import React from "react"
import "./Card.css"
import GatsbyImage from 'gatsby-image'

/*
const imageNode = data.allMongodbProdPosts.edges.find(edge => edge.node.image === props.image)
if (!imageNode.node.localImage.childImageSharp) console.log(imageNode, imageNode.node.id, props.image)
const imageData = imageNode.node.localImage.childImageSharp.fluid
*/

export default (props) => (
  <a href={props.link}>
    <div className="Card">
      {/*<GatsbyImage className="Image2" fluid={imageSrc} alt={props.text} />
      <GatsbyImage className="cardImage" fluid={props} />*/}
      <div className='gradient'></div>
      <h4 className={props.art ? "artTitle" : "title"}>{props.official ? props.title : props.title ? props.title.substring(0, 30) : ''}</h4>
      <p className={props.official ? "officialAuthor" : "author"}>{props.text}</p>
    </div>
  </a>
)
