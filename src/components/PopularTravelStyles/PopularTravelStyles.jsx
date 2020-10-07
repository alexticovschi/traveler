import React from "react"
import Title from "../Title/Title"
import TravelStyleCard from "../TravelStyleCard/TravelStyleCard"
import { useStaticQuery, graphql } from "gatsby"
import "./popularTravelStyles.scss"

const getPopularTravelStyles = graphql`
  {
    popularTravelStyles: allContentfulPopularTravelStyle {
      edges {
        node {
          title
          discount
          totalDeals
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const PopularTravelStyles = () => {
  const response = useStaticQuery(getPopularTravelStyles)
  const popularTravelStyles = response.popularTravelStyles.edges

  return (
    <section className="section-popular-travel-styles mt">
      <div className="grid-container">
        <div className="popular-travel-styles-container">
          <Title title="Popular Travel Styles" />

          <div className="popular-travel-styles">
            {popularTravelStyles.map(({ node }) => (
              <TravelStyleCard key={node.title} deal={node} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularTravelStyles
