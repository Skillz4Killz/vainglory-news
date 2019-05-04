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
      {/*props.fixed
        ? (<GatsbyImage className="image2" fixed={props.fixed} />)
        : (<img className="image2" src={props.image} alt={props.title} />)
      */}
      {props.fixed
        ? (<GatsbyImage className="Image1" fixed={props.fixed} />)
        : (<img className="Image1" src={props.image} alt={props.title} />)
      }
      <div className='gradient'></div>
      <h4 className={props.art ? "artTitle" : "title"}>{props.official ? props.title : props.title ? props.title.substring(0, 30) : ''}</h4>
      <p className={props.official ? "officialAuthor" : "author"}>{props.text}</p>
    </div>
  </a>
)
