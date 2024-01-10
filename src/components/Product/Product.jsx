// Product.js

import React from 'react';
import './Product.css'; // Import your CSS file for styling

const Product = ({ image, name, price, gender }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-info">{gender}</p>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
