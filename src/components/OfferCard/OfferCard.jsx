import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import "./offerCard.scss"

const OfferCard = ({ deal }) => {
  const { title, discount, totalDeals, image } = deal

  return (
    <AniLink fade to={`/deals`}>
      <figure className="offer-card">
        <Image fluid={image.fluid} className="offer-card__img" alt="tour" />

        <figcaption className="offer-card__discount">
          <span>UP TO {discount}% OFF</span>
        </figcaption>
        <figcaption className="offer-card__title">
          <span>{title}</span>
        </figcaption>
        <figcaption className="offer-card__deals">
          <span>{totalDeals} deals</span>
        </figcaption>
        <span className="offer-card__img-overlay"></span>
      </figure>
    </AniLink>
  )
}

export default OfferCard
