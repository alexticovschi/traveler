import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import TourDeal from "../components/TourDeal/TourDeal"
import PopularTours from "../components/PopularTours/PopularTours"
import SEO from "../components/SEO"

const TravelStyleDealTemplate = ({ data }) => {
  const { title, discount, heroImage } = data.travelStyle.edges[0].node
  console.log(data)
  return (
    <Layout>
      <SEO title={`${title} Deals`} description={`${title} - Deals page`} />
      <StyledHero opacity="true" img={heroImage.fluid}>
        <Banner className="banner" title={`${title} Deals`}>
          <div className="banner__discount">
            <span>UP TO {discount}% OFF</span>
          </div>
        </Banner>
      </StyledHero>
      <div className="wrapper">
        <Title title={`${title} Deals and Discounts`} />

        <div className="grid-container">
          <section className="tours">
            {data.deals.edges.map(({ node }) => (
              <TourDeal key={node.id} tour={node} />
            ))}
          </section>
        </div>
      </div>
      <PopularTours />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    deals: allContentfulTour(filter: {travelStyles: {elemMatch: {style: {eq: $slug}}}}) {
      edges {
        node {
          id
          name
          price
          days
          slug
          start(formatString: "dddd MMMM Do, YYYY")
          departure
          description {
            description
          }
          itinerary {
            day
            info
            title
          }
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          highlights {
            fluid {
              ...GatsbyContentfulFluid
            }
            title
            description
          }
          discount
        }
      }
    }
    travelStyle: allContentfulPopularTravelStyle(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          discount
          heroImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default TravelStyleDealTemplate
