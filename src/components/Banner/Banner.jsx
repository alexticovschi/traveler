import React from "react"

import "./banner.scss"

const Banner = ({ title, info, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <p className="banner__info">{info}</p>
      {children}
    </div>
  )
}

export default Banner
