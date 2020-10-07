import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./popularToursCard.scss"

const PopularToursCard = ({ title, imgSrc, slug, price, days, departure }) => {
  return (
    <AniLink fade to={`/tours/${slug}`} className="popular-tours-card">
      <figure className="popular-tours-card__img-wrapper">
        <Image
          fluid={imgSrc.fluid}
          alt="featured tour"
          className="popular-tours-card__img"
        />
        <figcaption className="popular-tours-card__duration">
          <span className="popular-tours-card__duration-days">{days}</span>
          <span className="popular-tours-card__duration-text">days</span>
        </figcaption>
      </figure>
      <h2 className="popular-tours-card__title">{title}</h2>
      <p className="popular-tours-card__departure">Departs {departure}</p>
      <p className="popular-tours-card__price">From &pound;{price} GBP</p>
    </AniLink>
  )
}

export default PopularToursCard
