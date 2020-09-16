import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import TopDestinations from "../components/TopDestinations/TopDestinations"
import DealsAndSavings from "../components/DealsAndSavings/DealsAndSavings"

import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query {
    contactHeroImage: file(relativePath: { eq: "londonHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const deals = ({ data }) => {
  return (
    <Layout>
      <SEO title="Deals" description="Tour and Travel Deals" />
      <StyledHero
        opacity="true"
        img={data.contactHeroImage.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          title="Travel is always a good idea"
        ></Banner>
      </StyledHero>
      <TopDestinations />
      <DealsAndSavings />
    </Layout>
  )
}

export default deals