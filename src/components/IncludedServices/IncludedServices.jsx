import React from "react"
import Image from "gatsby-image"
import Title from "../Title/Title"
import bed from "../../images/svg/bed.svg"
import bus from "../../images/svg/bus.svg"
import localGuide from "../../images/svg/local-guide.svg"
import toaster from "../../images/svg/toaster.svg"

import "./includedServices.scss"

const IncludedServices = () => {
  return (
    <div className="container">
      <section className="included-services">
        <Title title="What’s included on every Traveler tour" />

        <div className="included-services__list">
          <div className="included-services__item">
            <figure className="included-services__img-wrapper">
              <img
                className="included-services__icon"
                src={localGuide}
                alt="local guide icon"
              />
            </figure>
            <h2 className="included-services__title">
              Expert Local Guide/Driver
            </h2>
          </div>
          <div className="included-services__item">
            <figure className="included-services__img-wrapper">
              <img
                className="included-services__icon"
                src={bed}
                alt="bed icon"
              />
            </figure>
            <h2 className="included-services__title">
              Flash-Pack Accommodation
            </h2>
          </div>
          <div className="included-services__item">
            <figure className="included-services__img-wrapper">
              <img
                className="included-services__icon"
                src={bus}
                alt="bus icon"
              />
            </figure>
            <h2 className="included-services__title">Luxury Travel Vehicles</h2>
          </div>
          <div className="included-services__item">
            <figure className="included-services__img-wrapper">
              <img
                className="included-services__icon"
                src={toaster}
                alt="toaster icon"
              />
            </figure>
            <h2 className="included-services__title">Breakfast Everyday</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default IncludedServices
