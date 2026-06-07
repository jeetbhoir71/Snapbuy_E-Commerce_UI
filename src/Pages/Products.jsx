import React, { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Footer from '../components/Footer.jsx'
import '../Style/Products.css'

import jbl from '../assets/JBL.png'
import beatsBrown from '../assets/Beats Studio Pro Brown.png'
import airpods from '../assets/Apple Airpod Max.png'
import beatsRed from '../assets/Beats Studio Pro Red.png'
import beatsSolo from '../assets/Beats Solo 4.png'
import hyperx from '../assets/Gaming Headphone.png'

const allProducts = [
  { id: 1, name: 'JBL Tune Pro Wireless Headphones', price: '₹4,999', category: 'Headphone', brand: 'JBL', image: jbl },
  { id: 2, name: 'Beats Studio Pro (Brown)', price: '₹24,999', category: 'Headphone', brand: 'Boat', image: beatsBrown },
  { id: 3, name: 'Apple AirPods Max (Space Gray)', price: '₹54,900', category: 'Headphone', brand: 'Airpods', image: airpods },
  { id: 4, name: 'Beats Studio Pro (Red)', price: '₹24,999', category: 'Headphone', brand: 'Boat', image: beatsRed },
  { id: 5, name: 'Beats Solo 4 (Blue)', price: '₹19,999', category: 'Headphone', brand: 'Boat', image: beatsSolo },
  { id: 6, name: 'HyperX Gaming Headset RGB Edition', price: '₹6,999', category: 'Headphone', brand: 'CMF by Nothing', image: hyperx },
]

const brands = ['JBL', 'Boat', 'Airpods', 'Bose', 'CMF by Nothing']
const categories = ['Headphone Cable', 'Headphone Case']

function Products() {
  const [search, setSearch] = useState('Headphones')
  const [selectedBrand, setSelectedBrand] = useState(null)

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || search === '' || search.toLowerCase() === 'headphones'
    const matchBrand = selectedBrand ? p.brand === selectedBrand : true
    return matchSearch && matchBrand
  })

  return (
    <div className="page">
      <Navbar />
      <div className="products-layout">
        <aside className="products-sidebar">
          <h2 className="sidebar-title">Filters</h2>
          <div className="sidebar-section">
            <h4 className="sidebar-section-title">Categories</h4>
            <ul className="sidebar-list">
              {categories.map(c => (
                <li key={c} className="sidebar-list-item">
                  <span className="sidebar-arrow">›</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="sidebar-section">
            <h4 className="sidebar-section-title">More Brands</h4>
            <input
              className="sidebar-search"
              placeholder="Search Headphones"
              type="text"
            />
            <ul className="sidebar-list">
              {brands.map(b => (
                <li
                  key={b}
                  className={`sidebar-list-item ${selectedBrand === b ? 'selected' : ''}`}
                  onClick={() => setSelectedBrand(selectedBrand === b ? null : b)}
                >
                  <span className="sidebar-arrow">›</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="products-main">
          <div className="products-search-bar">
            <input
              type="text"
              className="products-search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
            />
            <button className="products-search-btn">🔍</button>
          </div>
          <div className="products-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} name={p.name} price={p.price} image={p.image} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products