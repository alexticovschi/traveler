import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import Title from "../components/Title/Title"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import TourDeal from "../components/TourDeal/TourDeal"
import PopularTours from "../components/PopularTours/PopularTours"
import SEO from "../components/SEO"

const DealTemplate = ({ data }) => {
  const { title, discount } = data.deal.edges[0].node

  return (
    <Layout>
      <SEO title={`${title} Deals`} description={`${title} - Deals page`} />
      <StyledHero
        opacity="true"
        img={data.dealsHeroImage.childImageSharp.fluid}
      >
        <Banner className="banner" title={`${title} Deals`}>
          <div className="banner__discount">
            <span>UP TO {discount}% OFF</span>
          </div>
        </Banner>
      </StyledHero>
      <div className="wrapper">
        <Title title="Explore our Deals" />

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
    deals: allContentfulTour(
      filter: { continentSlug: { eq: $slug }, offer: { eq: true } }
    ) {
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
    deal: allContentfulDeal(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          discount
        }
      }
    }
    dealsHeroImage: file(relativePath: { eq: "dealsHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default DealTemplate
