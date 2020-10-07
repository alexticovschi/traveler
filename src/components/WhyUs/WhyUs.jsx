import React from "react"
import Title from "../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import "./whyus.scss"

const getImages = graphql`
  query images {
    img1: file(relativePath: { eq: "whyus/traveler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "whyus/guide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "whyus/groups.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "whyus/scenery.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WhyUs = () => {
  const images = useStaticQuery(getImages)
  const { img1, img2, img3, img4 } = images

  return (
    <section className="section-why-us mt">
      <div className="grid-container">
        <section className="why-us">
          <Title title="Why Traveler" />

          <div className="why-us__container">
            <div className="why-us-card">
              <figure>
                <Image
                  fluid={img1.childImageSharp.fluid}
                  className="why-us-card__img"
                  alt="why-us card"
                />
              </figure>
              <div className="why-us-card__content">
                <h2 className="why-us-card__title">Our Vehicles</h2>
                <p className="why-us-card__text">
                  Travel in style with our fleet of luxury vehicles, complete
                  with USB chargers, WIFI and comfy seats.
                </p>
              </div>
            </div>
            <div className="why-us-card">
              <figure>
                <Image
                  fluid={img2.childImageSharp.fluid}
                  className="why-us-card__img"
                  alt="why-us card"
                />
              </figure>
              <div className="why-us-card__content">
                <h2 className="why-us-card__title">Local Guides</h2>
                <p className="why-us-card__text">
                  Explore local spots with our guides who are passionate about
                  showing you their backyard.
                </p>
              </div>
            </div>
            <div className="why-us-card">
              <figure>
                <Image
                  fluid={img3.childImageSharp.fluid}
                  className="why-us-card__img"
                  alt="why-us card"
                />
              </figure>
              <div className="why-us-card__content">
                <h2 className="why-us-card__title">Small Groups</h2>
                <p className="why-us-card__text">
                  With a maximum group size of 18, you are bound to bond with
                  your travel family.
                </p>
              </div>
            </div>
            <div className="why-us-card">
              <figure>
                <Image
                  fluid={img4.childImageSharp.fluid}
                  className="why-us-card__img"
                  alt="why-us card"
                />
              </figure>
              <div className="why-us-card__content">
                <h2 className="why-us-card__title">
                  <span className="short-text">Stunning </span>Scenery
                </h2>
                <p className="why-us-card__text">
                  Natural backdrops include pristine beaches, jagged cliffs,
                  mountain ranges and crystal clear lakes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default WhyUs
