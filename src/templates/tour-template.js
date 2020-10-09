import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import TourBanner from "../components/TourBanner/TourBanner"
import TourDetails from "../components/TourDetails/TourDetails"
import WhyUs from "../components/WhyUs/WhyUs"
import IncludedServices from "../components/IncludedServices/IncludedServices"
import PopularTours from "../components/PopularTours/PopularTours"
import SEO from "../components/SEO"

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    departure,
    days,
    description: { description },
    images,
    highlights,
    itinerary,
    discount,
    offer,
  } = data.tour
  return (
    <Layout>
      <SEO title={name} description="Tour page" />
      <TourBanner images={images} />
      <TourDetails
        name={name}
        description={description}
        days={days}
        price={price}
        highlights={highlights}
        departure={departure}
        itinerary={itinerary}
        discount={discount}
        offer={offer}
      />
      <IncludedServices />
      <WhyUs />
      <PopularTours />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      days
      start(formatString: "dddd MMMM Do, YYYY")
      departure
      description {
        description
      }
      discount
      itinerary {
        day
        info
        title
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      highlights {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
        description
      }
      offer
    }
  }
`

export default TourTemplate
