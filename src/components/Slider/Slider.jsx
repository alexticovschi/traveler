import React from "react"
import Slider from "react-slick"
import Offer from "../Offer/Offer"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

const settings = {
  dots: true,
  autoplaySpeed: 3000,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 600,
      },
    },
  ],
}

const getTopOffers = graphql`
  {
    topOffers: allContentfulTopOffer {
      edges {
        node {
          title
          reviews
          days
          price
          highlights {
            text
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const MySlider = () => {
  const response = useStaticQuery(getTopOffers)
  const topOffers = response.topOffers.edges

  return (
    <Slider {...settings} className="sldr">
      {topOffers.map(({ node }) => (
        <Offer key={node.title} offer={node} />
      ))}
    </Slider>
  )
}

export default MySlider
