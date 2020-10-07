import React from "react"
import Title from "../Title/Title"
import TourCard from "../TourCard/TourCard"
import { useStaticQuery, graphql } from "gatsby"

import "./tours.scss"

const getTours = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          name
          price
          slug
          contentful_id
          days
          departure
          offer
          discount
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const response = useStaticQuery(getTours)
  const tours = response.tours.edges

  return (
    <section className="tours-container mt">
      <Title title="Choose your dream tour" />
      <div className="grid-container">
        <div className="tours">
          {tours.map(({ node }) => (
            <TourCard key={node.contentful_id} tour={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tours
