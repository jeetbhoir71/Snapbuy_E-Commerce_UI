import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../Style/About.css'

function About() {
  return (
    <div className="page">
      <Navbar />
      <main className="about-main">
        {/* The About page screenshot only shows the footer with contact/follow sections.
            The main content area appears blank/dark. We replicate this layout. */}
        <div className="about-content">
          <div className="about-card">
            <h1 className="about-heading">About SnapBuy</h1>
            <p className="about-text">
              SnapBuy is your one-stop destination for premium gadgets, fashion, and lifestyle products.
              We bring you quality, style, and convenience—all in one place.
            </p>
            <p className="about-text">
              Founded in 2024 and headquartered in Pune, Maharashtra, India, SnapBuy is committed to
              delivering the best shopping experience with curated collections, unbeatable deals, and
              hassle-free returns.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default About
