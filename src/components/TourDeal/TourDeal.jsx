import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

import "./tourDeal.scss"

const TourDeal = ({ tour }) => {
  const { name, price, slug, days, images, departure, discount } = tour
  const mainImage = images[0].fluid
  const reduced = (price * parseFloat(discount)) / 100.0
  const newPrice = price - reduced

  return (
    <div className="tour-deal">
      <AniLink fade to={`/tours/${slug}`}>
        <figure className="tour-deal__img-wrapper">
          <Image fluid={mainImage} className="tour-deal__img" alt="tour" />
          <figcaption className="tour-deal__duration">
            <span className="tour-deal__duration-days">{days}</span>
            <span className="tour-deal__duration-text">days</span>
          </figcaption>
          <div className="tour-deal__badge-wrapper">
            <span className="tour-deal__badge">-{discount}%</span>
          </div>
        </figure>
      </AniLink>
      <h3 className="tour-deal__name">{name}</h3>
      <p className="tour-deal__departure">Departs {departure}</p>
      <div className="tour-deal__price-offer">
        <div className="tour-deal__prices">
          From{" "}
          {!discount ? (
            <span>&pound;{price}</span>
          ) : (
            <span>
              <span className="tour-deal__old-price">&pound;{price}</span>{" "}
              &pound;
              {parseInt(newPrice)}
            </span>
          )}
        </div>
        {discount ? (
          <div className="tour-deal__savings">
            You Save: &pound;{parseInt(reduced)}
          </div>
        ) : null}
      </div>
      <AniLink fade to={`/tours/${slug}`}>
        <div className="tour-deal__btn-wrapper">
          <button type="button" className="btn-primary tour-deal__btn">
            Explore Tour
          </button>
        </div>
      </AniLink>
    </div>
  )
}

export default TourDeal
