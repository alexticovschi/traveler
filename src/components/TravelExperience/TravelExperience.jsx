import React from "react"
import Title from "../Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import "./travelExperience.scss"

const getTravelExperiencesImages = graphql`
  query travelExperiencesImages {
    img1: file(relativePath: { eq: "travelexperience/solo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "travelexperience/travelfriends.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "travelexperience/makingfriends.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TravelExperience = () => {
  const images = useStaticQuery(getTravelExperiencesImages)
  const { img1, img2, img3 } = images

  return (
    <div className="container">
      <section className="travel-experiences">
        <Title title="our travel experiences" />

        <div className="travel-experiences__wrapper">
          <div className="travel-experiences-card">
            <figure>
              <Image
                fluid={img1.childImageSharp.fluid}
                className="travel-experiences-card__img"
                alt="travel-experiences card"
              />
            </figure>
            <div className="travel-experiences-card__content">
              <h2 className="travel-experiences-card__title">
                Travelling Solo
              </h2>
              <p className="travel-experiences-card__text">
                Your Traveler tour comes packed with a bunch of mates, and we
                will make sure you are grouped with sociable, like-minded
                people. Prepare to have a lot of fun, make new friends and
                discover the best that Traveler have to offer.
              </p>
            </div>
          </div>
          <div className="travel-experiences-card">
            <figure>
              <Image
                fluid={img2.childImageSharp.fluid}
                className="travel-experiences-card__img"
                alt="travel-experiences card"
              />
            </figure>
            <div className="travel-experiences-card__content">
              <h2 className="travel-experiences-card__title">
                Travelling with Friends
              </h2>
              <p className="travel-experiences-card__text">
                Bring a mate or two, we know you’ll make more on this trip!
                There are plenty of like-minded people to hang out with and you
                will walk away with friends for life.
              </p>
            </div>
          </div>
          <div className="travel-experiences-card">
            <figure>
              <Image
                fluid={img3.childImageSharp.fluid}
                className="travel-experiences-card__img"
                alt="travel-experiences card"
              />
            </figure>
            <div className="travel-experiences-card__content">
              <h2 className="travel-experiences-card__title">
                Making New Friends
              </h2>
              <p className="travel-experiences-card__text">
                The more personal size of our groups enable the yarns to run
                free and new friendships to form. So, whether you came solo or
                with a few mates, you’ll be sure to make some great new friends!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TravelExperience
