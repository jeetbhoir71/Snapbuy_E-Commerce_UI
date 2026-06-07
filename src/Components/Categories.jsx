import React from 'react'
import '../Style/Categories.css'

const offers = [
  { title: '50% OFF', subtitle: 'Summer Electronics Sale' },
  { title: 'NEW ARRIVALS', subtitle: 'Latest Premium Gadgets' },
  { title: 'FREE SHIPPING', subtitle: 'Orders Above ₹999' },
  { title: 'EASY RETURNS', subtitle: 'Hassle-Free Refunds' },
]

function Categories() {
  return (
    <section className="categories">
      <h2 className="categories-title">Exclusive Offers</h2>
      <div className="categories-grid">
        {offers.map((offer, i) => (
          <div className="category-card" key={i}>
            <h3 className="category-card-title">{offer.title}</h3>
            <p className="category-card-subtitle">{offer.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
