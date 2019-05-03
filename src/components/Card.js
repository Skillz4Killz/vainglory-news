import React from "react"
import "./Card.css"
import GatsbyImage from 'gatsby-image'

export default props => (
  <a href={props.link}>
    <div className="Card">
      <img className='Image2' src={props.image} alt={props.text} />
      <GatsbyImage src={props.image} alt={props.text} />
      <div className='gradient'></div>
      <h4 className={props.art ? "artTitle" : "title"}>{props.official ? props.title : props.title ? props.title.substring(0, 30) : ''}</h4>
      <p className={props.official ? "officialAuthor" : "author"}>{props.text}</p>
    </div>
  </a>
)


export const query = graphql`
  query {
    allMongodbProdPosts {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

