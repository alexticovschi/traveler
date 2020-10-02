import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"
import "./socialBanner.scss"

const SocialBanner = () => {
  return (
    <div className="container">
      <section className="social-banner">
        <ul className="social-banner__social-links">
          <li className="social-banner__social-item">
            <a
              className="social-banner__social-link"
              href="https://www.tripadvisor.co.uk/"
            >
              <FaTripadvisor />
            </a>
          </li>
          <li className="social-banner__social-item">
            <a
              className="social-banner__social-link"
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="social-banner__social-item">
            <a
              className="social-banner__social-link"
              href="https://twitter.com/"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="social-banner__social-item">
            <a
              className="social-banner__social-link"
              href="https://en-gb.facebook.com/"
            >
              <FaFacebook />
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default SocialBanner
