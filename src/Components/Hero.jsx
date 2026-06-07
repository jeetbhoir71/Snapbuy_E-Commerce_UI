import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">ELEVATE EVERY PURCHASE.</h1>
        <p className="hero-subtitle">
          Premium gadgets, fashion, and lifestyle products—all in one place.<br />
          Discover quality, style, and convenience with SnapBuy.
        </p>
        <Link to="/products" className="hero-btn">Explore Now</Link>
      </div>
    </section>
  )
}

export default Hero
