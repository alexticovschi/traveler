import React from "react"
import Slider from "react-slick"
import Offer from "../Offer/Offer"
import { useStaticQuery, graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

const settings = {
  dots: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  // infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        // infinite: true,
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
      },
    },
  ],
}

const getTopOffers = graphql`
  {
    topOffers: allContentfulTopOffers {
      edges {
        node {
          title
          reviews
          days
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

const MySlider = ({ images }) => {
  // const { img1, img2, img3, img4 } = images

  const response = useStaticQuery(getTopOffers)
  const topOffers = response.topOffers.edges
  console.log(topOffers)
  return (
    <Slider {...settings} className="sldr">
      {topOffers.map(({ node }) => (
        <Offer key={node.title} offer={node} />
      ))}
    </Slider>
    // <Slider {...settings} className="my-slider">
    //   <Image fluid={img1.childImageSharp.fluid} className="my-slider__img" />
    //   <Image fluid={img2.childImageSharp.fluid} className="my-slider__img" />
    //   <Image fluid={img3.childImageSharp.fluid} className="my-slider__img" />
    //   <Image fluid={img4.childImageSharp.fluid} className="my-slider__img" />
    //   <Image fluid={img2.childImageSharp.fluid} className="my-slider__img" />
    //   <Image fluid={img2.childImageSharp.fluid} className="my-slider__img" />
    // </Slider>
  )
}

export default MySlider
