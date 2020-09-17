import React from "react"
import Image from "gatsby-image"

import "./offer.scss"

const Offer = ({ offer }) => {
  const { title, image, reviews, days, price, highlights } = offer

  return (
    <div className="offer">
      <figure className="offer__img-wrapper">
        <Image fluid={image.fluid} className="offer__img" />
        <div className="offer__badge-wrapper">
          <span className="offer__badge">-50%</span>
        </div>
      </figure>
      <div className="offer__data">
        <h3 className="offer__title">{title}</h3>
        <p className="offer__reviews">{reviews} reviews</p>
        <h4 className="offer__days-and-price">
          {days} days from <span> &pound;{price}</span>
        </h4>
        <ul className="offer__highlights">
          {highlights && highlights.map(h => <li>{h.text}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Offer
