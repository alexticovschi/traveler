import React from "react"
import Title from "../Title/Title"
import Slider from "../Slider/Slider"

import "./topOffers.scss"

const TopOffers = () => {
  return (
    <div className="top-offers-wrapper">
      <Title title="Top Offers" />

      <div className="container">
        <section className="top-offers">
          <Slider />
        </section>
      </div>
    </div>
  )
}

export default TopOffers
