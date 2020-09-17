import React from "react"
import Title from "../Title/Title"
import Slider from "../Slider/Slider"
import Offer from "../Offer/Offer"
import { useStaticQuery, graphql } from "gatsby"

import "./topOffers.scss"

const getTopOffers = graphql`
  {
    topOffers: allContentfulTopOffers {
      edges {
        node {
          title
          reviews
          days
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

const TopOffers = () => {
  const response = useStaticQuery(getTopOffers)
  const topOffers = response.topOffers.edges
  console.log(topOffers)

  return (
    <div className="top-offers-wrapper">
      <Title title="Top Offers" />

      <div className="container">
        <section className="top-offers">
          <Slider className="sldr">
            {topOffers.map(({ node }) => (
              <Offer key={node.title} offer={node} />
            ))}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default TopOffers
