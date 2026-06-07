import React from 'react'
import '../Style/ProductCard.css'

function ProductCard({ image, name, price, emoji }) {
  return (
    <div className="product-card">
      <div className="product-card-img-wrap">
        {image ? (
          <img src={image} alt={name} className="product-card-img" />
        ) : (
          <div className="product-card-img-placeholder">
            <span>{emoji || '🎧'}</span>
          </div>
        )}
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-price">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard
