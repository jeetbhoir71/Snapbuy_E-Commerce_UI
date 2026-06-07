import React from 'react'
import '../Style/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-contact">
          <h3 className="footer-heading">CONTACT US :</h3>
          <p>Email: support@SnapBuy.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Pune, Maharashtra, India</p>
        </div>
        <div className="footer-divider" />
        <div className="footer-col footer-follow">
          <h3 className="footer-heading">FOLLOW US :</h3>
          <p>Instagram: @SnapBuy_official</p>
          <p>X (Twitter): @SnapBuy</p>
          <p>Facebook: SnapBuy Official</p>
          <p>LinkedIn: SnapBuy Technologies</p>
        </div>
      </div>
      <div className="footer-bottom-divider" />
      <div className="footer-bottom">
        <h2 className="footer-brand">SNAPBUY</h2>
        <p className="footer-copy">© 2026 SnapBuy. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
