import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Style/Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">SNAPBUY</Link>
      <div className="navbar-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
        <Link to="/cart" className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}>Cart</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link to="/login" className="nav-login-btn">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
