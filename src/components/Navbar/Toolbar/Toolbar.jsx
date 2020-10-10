import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../../../images/svg/logo-traveler.svg"

import {
  FaFacebookF,
  FaInstagram,
  FaTripadvisor,
  FaTwitter,
} from "react-icons/fa"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import "./Toolbar.scss"

const Toolbar = ({ isOpen, drawerClickHandler }) => (
  <header className="toolbar">
    <div className="toolbar-wrapper">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <AniLink fade to="/">
            <img className="logo" src={logo} alt="logo" />
          </AniLink>
        </div>
        <div className="spacer" />
        <ul className="toolbar__navigation-items">
          <li className="toolbar__navigation-item">
            <AniLink fade to="/">
              Home
            </AniLink>
          </li>
          <li className="toolbar__navigation-item">
            <AniLink fade to="/tours">
              Tours
            </AniLink>
          </li>
          <li className="toolbar__navigation-item">
            <AniLink fade to="/deals">
              Deals
            </AniLink>
          </li>
          <li className="toolbar__navigation-item">
            <AniLink fade to="/blog">
              Blog
            </AniLink>
          </li>
          <li className="toolbar__navigation-item">
            <AniLink fade to="/about">
              About
            </AniLink>
          </li>
          <li className="toolbar__navigation-item">
            <AniLink fade to="/contact">
              Contact
            </AniLink>
          </li>
          <ul className="toolbar__navigation-social-links">
            <li className="toolbar__navigation-social-item">
              <a
                className="toolbar__navigation-social-link"
                href="https://www.tripadvisor.co.uk/"
              >
                <FaTripadvisor />
              </a>
            </li>
            <li className="toolbar__navigation-social-item">
              <a
                className="toolbar__navigation-social-link"
                href="https://www.instagram.com/"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="toolbar__navigation-social-item">
              <a
                className="toolbar__navigation-social-link"
                href="https://twitter.com/"
              >
                <FaTwitter />
              </a>
            </li>
            <li className="toolbar__navigation-social-item">
              <a
                className="toolbar__navigation-social-link"
                href="https://en-gb.facebook.com/"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </ul>
        <div className="toolbar__toggle-button">
          <DrawerToggleButton isOpen={isOpen} click={drawerClickHandler} />
        </div>
      </nav>
    </div>
  </header>
)

export default Toolbar
