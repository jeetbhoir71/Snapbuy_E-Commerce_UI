import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import Cart from './Pages/Cart.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import BecomeSeller from './Pages/BecomeSeller.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/become-a-seller" element={<BecomeSeller />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
