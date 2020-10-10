import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import "./travelStyleCard.scss"

const TravelStyleCard = ({ deal }) => {
  const { title, discount, totalDeals, image, slug } = deal

  return (
    <AniLink fade to={`/deals/${slug}`}>
      <figure className="travel-style-card">
        <Image
          fluid={image.fluid}
          className="travel-style-card__img"
          alt="tour"
        />

        <figcaption className="travel-style-card__discount">
          <span>UP TO {discount}% OFF</span>
        </figcaption>
        <figcaption className="travel-style-card__title">
          <span>{title}</span>
        </figcaption>
        <figcaption className="travel-style-card__deals">
          <span>{totalDeals} deals</span>
        </figcaption>
        <span className="travel-style-card__img-overlay"></span>
      </figure>
    </AniLink>
  )
}

export default TravelStyleCard
