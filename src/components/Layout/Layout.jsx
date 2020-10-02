import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import SocialBanner from "../SocialBanner/SocialBanner"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <SocialBanner />
      <Footer />
    </main>
  )
}

export default Layout
