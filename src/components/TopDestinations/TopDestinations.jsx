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
    <section className="section-top-destinations mt">
      <Title title="Top Destinations" />

      <div className="grid-container">
        <div className="top-destinations">
          {deals.map(({ node }) => (
            <OfferCard key={node.title} deal={node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopDestinations
