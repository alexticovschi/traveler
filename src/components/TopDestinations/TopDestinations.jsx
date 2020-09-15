import React from "react"
import Title from "../Title/Title"
import Destination from "../Destination/Destination"
import { useStaticQuery, graphql } from "gatsby"
import "./topDestinations.scss"

const getDeals = graphql`
  {
    deals: allContentfulDeal {
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

const TopDestinations = () => {
  const response = useStaticQuery(getDeals)
  const deals = response.deals.edges

  return (
    <div className="destinations-wrapper">
      <Title title="Top Destinations" />

      <div className="container">
        <section className="destinations">
          {deals.map(({ node }) => (
            <Destination key={node.id} deal={node} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default TopDestinations
