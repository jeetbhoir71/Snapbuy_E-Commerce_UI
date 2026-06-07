import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Categories from '../components/Categories.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'
import '../Style/Home.css'  

function Home() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default Home
