import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Hero from '../Components/Hero.jsx'
import Categories from '../Components/Categories.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import Footer from '../Components/Footer.jsx'
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
