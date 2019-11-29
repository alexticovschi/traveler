import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner/Banner"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    aboutHeroImage: file(relativePath: { eq: "aboutHero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4140) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const about = ({ data }) => {
  return (
    <Layout>
      <StyledHero
        opacity="true"
        img={data.aboutHeroImage.childImageSharp.fluid}
      >
        <Banner
          className="banner"
          title="About Us"
          info="connect people to life-enriching travel experiences"
        ></Banner>
      </StyledHero>
    </Layout>
  )
}

export default about
