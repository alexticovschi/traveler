import React from "react"
import Title from "../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import luggage from "../../images/svg/luggage.svg"
import calendar from "../../images/svg/calendar.svg"
import customer from "../../images/svg/customer-service.svg"

import "./spotlight.scss"

const getSpotlightImages = graphql`
  query spotlightImages {
    img1: file(relativePath: { eq: "spotlight/spot1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "spotlight/spot2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Spotlight = () => {
  const images = useStaticQuery(getSpotlightImages)
  const { img1, img2 } = images
  return (
    <section className="spotlight">
      <Title
        title="Traveler Spotlight"
        subtitle="Find out what’s happening at Traveler: from the latest travel news to
        our special offers."
      />

      <div className="container">
        <div className="spotlight__special-and-news">
          <a href="#" className="spotlight__special sp1">
            <figure>
              <Image
                fluid={img1.childImageSharp.fluid}
                className="spotlight__special-image"
                alt="whyus card"
              />
            </figure>

            <div className="spotlight__special-content">
              <h4 className="spotlight__special-title">Private Tours</h4>
              <p className="spotlight__special-text">
                Experiences you can adapt and change to create a personalized
                trip.
              </p>
              <span className="spotlight__special-cta">Learn more</span>
            </div>
          </a>
          <a href="#" className="spotlight__special sp2">
            <figure>
              <Image
                fluid={img2.childImageSharp.fluid}
                className="spotlight__special-image"
                alt="whyus card"
              />
            </figure>
            <div className="spotlight__special-content">
              <h4 className="spotlight__special-title">
                Global Travel Requirements
              </h4>
              <p className="spotlight__special-text">
                Check to see if a country is open for travel by using our search
                system.
              </p>

              <span className="spotlight__special-cta">Learn more</span>
            </div>
          </a>
          <div className="spotlight__info-special">
            <a href="#" className="spotlight__info-special__item">
              <img
                className="spotlight__info-special__icon"
                src={luggage}
                alt="luggage"
              />
              <div className="spotlight__info-special__content">
                <p className="spotlight__info-special__title">
                  FAQ: Covid-19 and Your Travel Plans
                </p>
                <span className="spotlight__info-special__cta">Learn more</span>
              </div>
            </a>
            <a href="#" className="spotlight__info-special__item">
              <img
                className="spotlight__info-special__icon"
                src={calendar}
                alt="calendar"
              />
              <div className="spotlight__info-special__content">
                <p className="spotlight__info-special__title">
                  Discover Booking With Flexibility
                </p>
                <span className="spotlight__info-special__cta">Learn more</span>
              </div>
            </a>
            <a href="#" className="spotlight__info-special__item">
              <img
                className="spotlight__info-special__icon"
                src={customer}
                alt="customer"
              />
              <div className="spotlight__info-special__content">
                <p className="spotlight__info-special__title">
                  Reach Out: 24/7 Customer Support
                </p>
                <span className="spotlight__info-special__cta">Contact us</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spotlight
