import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../Style/Cart.css'

function Cart() {
  return (
    <div className="page">
      <Navbar />
      <main className="cart-main">
        <div className="cart-empty-box">
          <div className="cart-empty-content">
            <div className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <h2 className="cart-empty-title">Your Cart is Empty</h2>
            <p className="cart-empty-desc">
              Looks like you haven't added anything yet. Explore our premium collection and find your next favorite product.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Cart
