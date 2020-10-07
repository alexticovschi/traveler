import React from "react"
import Title from "../Title/Title"
import Slider from "../Slider/Slider"

import "./topOffers.scss"

const TopOffers = () => {
  return (
    <section className="section-top-offers mt">
      <Title title="Top Offers" />

      <div className="grid-container">
        <section className="top-offers">
          <Slider />
        </section>
      </div>
    </section>
  )
}

export default TopOffers
