// ProductsList.js

import React from 'react';
import Product from './Product'; // Import the Product component
import './ProductsList.css'; // Import your CSS file for styling
import { shoeProducts } from '../../data/shoeProducts';

const ProductsList = () => {

  return (
    <div className="products-list">
      {shoeProducts.map((product) => (
        <Product
          key={product.id} // Remember to include a unique key for each item in a list
          image={product.imageURL}
          name={product.name}
          price={product.price}
          gender={product.gender}
        />
      ))}
    </div>
  );
}

export default ProductsList;
