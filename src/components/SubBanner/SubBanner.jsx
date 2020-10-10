import React from "react"
import logo from "../../images/svg/logo-traveler-sub.svg"

import "./subBanner.scss"

const SubBanner = () => {
  return (
    <section className="section-sub-banner">
      <div className="grid-container" style={{ padding: "0 0" }}>
        <div className="sub-banner">
          <img className="sub-banner__logo" src={logo} alt="logo" />
          <h2 className="sub-banner__heading">
            The right tour for the right traveller
          </h2>
        </div>
      </div>
    </section>
  )
}

export default SubBanner
