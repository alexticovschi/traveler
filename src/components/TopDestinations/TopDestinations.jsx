import React from "react"
import Title from "../Title/Title"
import OfferCard from "../OfferCard/OfferCard"
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
          slug
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
            <OfferCard key={node.title} deal={node} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default TopDestinations
