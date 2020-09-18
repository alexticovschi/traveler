import React from "react"
import "./bestDealsBanner.scss"

const BestDealsBanner = () => {
  return (
    <section className="best-deals-banner">
      <div className="container">
        <div className="best-deals-banner__wrapper">
          <div className="best-deals-banner__bl">
            <h4 className="best-deals-banner__title">
              Get the best deals first
            </h4>
            <p className="best-deals-banner__text">
              Sign up to get best deals in your inbox
            </p>
          </div>
          <div className="best-deals-banner__br">
            <form className="best-deals-banner__form" action="">
              <label
                className="best-deals-banner__form-label"
                htmlFor="newsletter-input"
              >
                Email Address
              </label>
              <input
                id="newsletter-input"
                className="best-deals-banner__form-input"
                type="email"
                placeholder="Email address"
                name="email"
              />
              <button className="best-deals-banner__form-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestDealsBanner
