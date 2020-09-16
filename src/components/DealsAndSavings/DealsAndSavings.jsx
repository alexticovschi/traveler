import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import clock from "../../images/svg/clock.svg"
import person from "../../images/svg/person.svg"
import bird from "../../images/svg/bird.svg"

import "./dealsAndSavings.scss"

const DealsAndSavings = () => {
  return (
    <section className="deals-saving-wrapper">
      <div className="container">
        <div className="deals-savings">
          <div className="deals-savings__deal">
            <div className="deals-savings__deal-top">
              <img
                className="deals-savings__deal-icon"
                src={clock}
                alt="clock"
              />
              <h4 className="deals-savings__deal-title">Last Minute Savings</h4>
            </div>
            <p className="deals-savings__deal-text">
              Need to get away right now? Check out these last minute deals,
              we've got trips to fit your schedule and your budget.
            </p>
            <AniLink fade to={`/deals`} className="deals-savings__deal-link">
              See Deals
            </AniLink>
          </div>

          <div className="deals-savings__deal">
            <div className="deals-savings__deal-top">
              <img
                className="deals-savings__deal-icon"
                src={person}
                alt="person"
              />
              <h4 className="deals-savings__deal-title">2 for 1 Deals</h4>
            </div>
            <p className="deals-savings__deal-text">
              Buy one, get one free. If you enjoy travelling with a loved one or
              friend, then our 2 for 1 deals are perfect for you.
            </p>
            <AniLink fade to={`/deals`} className="deals-savings__deal-link">
              See Deals
            </AniLink>
          </div>

          <div className="deals-savings__deal">
            <div className="deals-savings__deal-top">
              <img className="deals-savings__deal-icon" src={bird} alt="bird" />
              <h4 className="deals-savings__deal-title">Early Bird Savings</h4>
            </div>
            <p className="deals-savings__deal-text">
              Take advantage of planning ahead. Book a tour at least 90 days in
              advance and enjoy these early bird deals.
            </p>
            <AniLink fade to={`/deals`} className="deals-savings__deal-link">
              See Deals
            </AniLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DealsAndSavings
