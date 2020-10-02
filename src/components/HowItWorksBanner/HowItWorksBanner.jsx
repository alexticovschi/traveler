import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./howItWorksBanner.scss"

const HowItWorksBanner = () => {
  const { howItWorksImage } = useStaticQuery(getImage)

  return (
    <div className="container">
      <section className="how-it-works-banner">
        <figure className="how-it-works-banner__img-wrapper">
          <Image
            className="how-it-works-banner__img"
            fluid={howItWorksImage.childImageSharp.fluid}
            alt="howitworks banner"
          />
        </figure>

        <div className="how-it-works-banner__content">
          <h3 className="how-it-works-banner__content-title">How it works</h3>
          <h3 className="how-it-works-banner__content-text">
            Everything you need to know about our tours
          </h3>
          <div className="how-it-works-banner__btn-wrapper">
            <button
              type="button"
              className="btn-white how-it-works-banner__btn"
            >
              Explore
            </button>
          </div>
        </div>
        <span className="how-it-works-banner__img-overlay"></span>
      </section>
    </div>
  )
}

const getImage = graphql`
  query howItWorksBanner {
    howItWorksImage: file(relativePath: { eq: "howitworksimg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HowItWorksBanner
