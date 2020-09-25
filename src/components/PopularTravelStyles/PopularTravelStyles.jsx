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
    <div className="popular-travel-styles-wrapper">
      <Title title="Popular Travel Styles" />

      <div className="container">
        <section className="popular-travel-styles">
          {popularTravelStyles.map(({ node }) => (
            <TravelStyleCard key={node.title} deal={node} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default PopularTravelStyles
