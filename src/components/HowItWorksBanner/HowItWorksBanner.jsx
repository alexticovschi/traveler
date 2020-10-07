import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import "./howItWorksBanner.scss"

const HowItWorksBanner = () => {
  const { howItWorksImage } = useStaticQuery(getImage)

  return (
    <section className="section-how-it-works-banner mt">
      <div className="grid-container">
        <div className="how-it-works-banner">
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

            <AniLink fade to={`/how-it-works`}>
              <button
                type="button"
                className="btn-white how-it-works-banner__btn"
              >
                Explore
              </button>
            </AniLink>
          </div>
          <span className="how-it-works-banner__img-overlay"></span>
        </div>
      </div>
    </section>
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
