import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import TravelExperience from "../components/TravelExperience/TravelExperience"
import HowItWorksInfo from "../components/HowItWorksInfo/HowItWorksInfo"
import PopularTours from "../components/PopularTours/PopularTours"

import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  query {
    howItWorksHeroImage: file(relativePath: { eq: "howItWorksHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HowItWorks = ({ data }) => {
  return (
    <Layout>
      <SEO title="How It Works" description="How It Works page" />
      <StyledHero
        opacity="true"
        img={data.howItWorksHeroImage.childImageSharp.fluid}
      >
        <Banner className="banner" title="How It Works"></Banner>
      </StyledHero>
      <HowItWorksInfo />
      <TravelExperience />
      <PopularTours />
    </Layout>
  )
}

export default HowItWorks
