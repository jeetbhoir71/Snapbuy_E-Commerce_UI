import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../Style/Login.css' 

function Login() {
  return (
    <div className="page">
      <Navbar />
      <main className="login-main">
        <div className="login-form-container">
          <div className="login-field">
            <label className="login-label">Enter Your Name :</label>
            <input type="text" className="login-input" />
          </div>
          <div className="login-field">
            <label className="login-label">Mobile No :</label>
            <input type="tel" className="login-input" />
          </div>
          <div className="login-field">
            <label className="login-label">Address :</label>
            <textarea className="login-textarea" rows={5} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Login
