import React from "react"
import "./tour.scss"
import TourCard from "../TourCard/TourCard"

const Tour = ({ tour, discount }) => {
  const { name, price, days, slug, images, departure } = tour
  let mainImage = images[0].fluid

  return (
    <article>
      <TourCard
        name={name}
        price={price}
        days={days}
        image={mainImage}
        slug={slug}
        departure={departure}
        discount={discount}
      />
    </article>
  )
}

export default Tour
