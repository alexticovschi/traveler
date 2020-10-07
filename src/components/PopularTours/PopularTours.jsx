import React from "react"
import Title from "../Title/Title"
import PopularToursCard from "../PopularToursCard/PopularToursCard"
import { useStaticQuery, graphql } from "gatsby"

import "./popularTours.scss"

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulFeaturedTour {
      edges {
        node {
          title
          days
          price
          slug
          departure
          contentful_id
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

const PopularTours = () => {
  const response = useStaticQuery(getFeaturedTours)
  const featuredTours = response.featuredTours.edges

  return (
    <section className="section-popular-tours mt">
      <div className="grid-container">
        <div className="popular-tours-container">
          <Title title="Popular tours" />

          <div className="popular-tours">
            {featuredTours.map(({ node }) => (
              <PopularToursCard
                key={node.contentful_id}
                imgSrc={node.images}
                title={node.title}
                slug={node.slug}
                price={node.price}
                days={node.days}
                departure={node.departure}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularTours
