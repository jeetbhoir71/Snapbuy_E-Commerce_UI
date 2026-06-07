import React from 'react'
import '../Style/Testimonials.css'

import IPhone from '../Assets/IPhone home.png'
import Macbook from '../Assets/Macbook Pro home.png'
import Airpods from '../Assets/Pro home.png'

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="deals-banner">
        <div className="deals-image-placeholder">
          <div className="deals-img-mock">
            <img src={IPhone} alt="iPhone" />
            <img src={Macbook} alt="Macbook" />
            <img src={Airpods} alt="Airpods" />
          </div>
        </div>
        <div className="deals-text">
          <h2 className="deals-title">AMAZING APPLE DEALS</h2>
          <p className="deals-subtitle">Premium Tech at Unbeatable Prices</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials