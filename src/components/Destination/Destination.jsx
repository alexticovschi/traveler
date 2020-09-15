import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import "./destination.scss"

const Destination = ({ deal }) => {
  const { title, discount, totalDeals, image } = deal

  return (
    <AniLink fade to={`/deals`}>
      <figure className="destination">
        <Image fluid={image.fluid} className="destination__img" alt="tour" />

        <figcaption className="destination__discount">
          <span>UP TO {discount}% OFF</span>
        </figcaption>
        <figcaption className="destination__title">
          <span>{title}</span>
        </figcaption>
        <figcaption className="destination__deals">
          <span>{totalDeals} deals</span>
        </figcaption>
        <span class="destination__img-overlay"></span>
      </figure>
    </AniLink>
  )
}

export default Destination
