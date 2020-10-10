import React from "react"
import map from "../../images/europe.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"
import "./tourDetails.scss"

const TourDetails = ({
  name,
  description,
  days,
  price,
  highlights,
  departure,
  itinerary,
  discount,
  offer,
}) => {
  const reduced = (price * parseFloat(discount)) / 100.0
  const newPrice = price - reduced
  const perDay = !offer ? price / days : newPrice / days

  return (
    <section className="section-tour mt">
      <div className="section-tour__details">
        <h2 className="section-tour__details__name">{name}</h2>
        <p className="section-tour__details__text">{description}</p>
      </div>
      <div className="section-tour__trip-box">
        <div className="trip-box">
          <figure className="trip-box__figure">
            <img className="trip-box__image" src={map} alt="europe map" />
            <figcaption className="trip-box__duration">
              <span className="trip-box__duration-days">{days}</span>
              <span className="trip-box__duration-text">days</span>
            </figcaption>
            {discount ? (
              <div className="trip-box__badge-wrapper">
                <span className="trip-box__badge">-{discount}%</span>
              </div>
            ) : null}
          </figure>
          <h2 className="trip-box__title">{name}</h2>
          <h5 className="trip-box__subtitle">Departs {departure}</h5>
          <div className="trip-box__info">
            <div className="trip-box__days">
              <span className="title">Days</span>
              <span className="subtitle">{days}</span>
            </div>
            <div className="trip-box__price-offer">
              <div className="trip-box__prices">
                <div className="title">Price From</div>
                {!offer ? (
                  <span className="subtitle">&pound;{price}</span>
                ) : (
                  <div>
                    <span className="trip-box__old-price subtitle">
                      &pound;{price}
                    </span>{" "}
                    &pound;
                    {parseInt(newPrice)}
                  </div>
                )}
              </div>
              {discount ? (
                <div className="trip-box__savings">
                  You Save: &pound;{parseInt(reduced)}
                </div>
              ) : null}
            </div>
            <div className="trip-box__per-day">
              <span className="title">Per Day</span>
              <span className="subtitle">&pound;{Math.round(perDay)}</span>
            </div>
          </div>
          <div className="trip-box__availability">
            <AniLink fade to="/tours">
              Check Availability
            </AniLink>
          </div>
          <p className="trip-box__hot-text">
            This tour is getting a lot of attention. It’s been viewed 500+ time
            in the past week.
          </p>
        </div>
      </div>
      <div className="section-tour__highlights">
        <div className="highlight-box-container">
          <h2 className="hightlight-title">Highlights</h2>
          {highlights.map(highlight => (
            <div key={highlight.title} className="highlight-box">
              <div className="highlight-box__image">
                <Image
                  fluid={highlight.fluid}
                  className="highlight-box__image__highlight-image"
                  alt="highlight"
                />
              </div>
              <div className="highlight-box__text">
                <h3 className="highlight-box__title">{highlight.title}</h3>
                <p className="highlight-box__description">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-tour__itinerary">
        <h2 className="itinerary-title">Itinerary</h2>
        <div className="itinerary__tabs">
          {itinerary.map((it, idx) => (
            <div key={idx} className="tab">
              <input type="checkbox" id={idx} />
              <label className="tab__label" htmlFor={idx}>
                {!it.title ? (
                  it.day
                ) : (
                  <p>
                    <span className="tab__label-day">{it.day}</span> :
                    <span className="tab__label-title">{it.title}</span>
                  </p>
                )}
              </label>
              <div className="tab__content">{it.info}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourDetails
