import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import "./howItWorksInfo.scss"

const getHowItWorksImages = graphql`
  query howItWorksImages {
    img1: file(relativePath: { eq: "howitworks/tripstyle.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "howitworks/destination.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "howitworks/travelwithus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "howitworks/activities.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img5: file(relativePath: { eq: "howitworks/servicesincluded.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img6: file(relativePath: { eq: "howitworks/accomodation.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img7: file(relativePath: { eq: "whyus/traveler.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img8: file(relativePath: { eq: "howitworks/groupsize.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img9: file(relativePath: { eq: "howitworks/guide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img10: file(relativePath: { eq: "howitworks/costoftravel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const HowItWorksInfo = () => {
  const howItWorksImages = useStaticQuery(getHowItWorksImages)
  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  } = howItWorksImages

  return (
    <div className="container">
      <section className="how-it-works-info">
        <div className="how-it-works-info__container">
          <div className="how-it-works-info__box how-it-works-info__box--1">
            <Image
              className="how-it-works-info__image  how-it-works-info__image--1"
              fluid={img1.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Our trip style</h3>
              <p className="how-it-works-info__text">
                Explore Europe, Asia, North America, Latin America, Australia
                and more with a small group of like-minded travellers in your
                luxury vehicle stopping at the most breathtaking spots. Discover
                incredible glaciers, lakes and beaches, get your adrenaline fix
                and make the memories of a lifetime with your new Traveler
                family!
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--2">
            <Image
              className="how-it-works-info__image  how-it-works-info__image--2"
              fluid={img2.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Destinations</h3>
              <p className="how-it-works-info__text">
                Flash-pack your way around the world. We have hunted out all the
                very best spots to give you the most epic small group
                experience. Sit back and take in all that these places have to
                offer from the comfort of our new, luxury cruisers.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--3">
            <Image
              className="how-it-works-info__image  how-it-works-info__image--3"
              fluid={img3.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Who travels with us</h3>
              <p className="how-it-works-info__text">
                Traveling solo? With 65% of our guests traveling on their own,
                you'll be surrounded by like-minded adventurous souls. Bringing
                friends? No problem, as everyone has one thing in common -
                making new friends to experience an awesome adventure with.
                Alternatively, if you have a large group, we can sort you out
                with a private departure.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--4">
            <Image
              className="how-it-works-info__image how-it-works-info__image--4"
              fluid={img4.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Included Activities</h3>
              <p className="how-it-works-info__text">
                Whatever your adventure thrills threshold, there’s optional
                activities in abundance for you to choose from. From bungee
                jumping to swimming with wild dolphins there are plenty of
                activities along the way. Each tour has a selection of optional
                once-in-a-lifetime activities at an additional cost and your
                guide will show you plenty of free activities including
                beautiful hikes and wildlife spotting.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--5">
            <Image
              className="how-it-works-info__image how-it-works-info__image--5"
              fluid={img5.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">What’s Included</h3>
              <p className="how-it-works-info__text">
                Transport for the duration of the tour (excluding airport
                transfers). Passionate local driver guide. Accommodation for
                every night of the trip. Breakfast provided every morning. Each
                trip also has unique inclusions relevant to the tour, so check
                out your itinerary to see which bits we throw in for free!
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--6">
            <Image
              className="how-it-works-info__image  how-it-works-info__image--6"
              fluid={img6.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Accommodation</h3>
              <p className="how-it-works-info__text">
                When you do finally bunk down for the night, the beds will be
                comfortable, the rooms warm and the linen clean. We stay in
                hostels and cabins we know and trust and keep the number of
                guests per room as low as possible to keep it more personal.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--7">
            <Image
              className="how-it-works-info__image  how-it-works-info__image--7"
              fluid={img7.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Our Vehicles</h3>
              <p className="how-it-works-info__text">
                Our fleet of vehicles will take your road trip to the next
                level. Kick back in a comfortable seats, surf the net via our
                on-board WiFi and play music through the stereo system. Low
                battery? Plug your charger into the USB port in your seat.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--8">
            <Image
              className="how-it-works-info__image how-it-works-info__image--8"
              fluid={img8.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Our group sizes</h3>
              <p className="how-it-works-info__text">
                Our adventure tours are for small groups of 18-60 year olds. We
                think small is best, so you’ll never find yourself with more
                than 18 people. It means you don’t get lost or left out in the
                chaos of a large group and you really get to know and bond with
                others on the trip.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--9">
            <Image
              className="how-it-works-info__image how-it-works-info__image--9"
              fluid={img9.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">Your guide</h3>
              <p className="how-it-works-info__text">
                We don’t hire bus drivers - we hire guides. Our local guides are
                passionate about Europe, Asia, North, South or Latin America and
                Australia and can't wait to show you their knowledge. They’ll be
                your go-to for everything from organising additional activities
                to teaching you about the local history.
              </p>
            </div>
          </div>
          <div className="how-it-works-info__box how-it-works-info__box--10">
            <Image
              className="how-it-works-info__image how-it-works-info__image--10"
              fluid={img10.childImageSharp.fluid}
              alt="how it works box"
            />
            <div className="how-it-works-info__content">
              <h3 className="how-it-works-info__title">
                How much does it cost
              </h3>
              <p className="how-it-works-info__text">
                The trip of a lifetime doesn’t have to blow the budget! Spend a
                week exploring with your Traveler family, passionate local
                guide, luxury transportation, flashpacker accommodation and
                breakfast every day. Flashpacker travel on a backpacker budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksInfo
