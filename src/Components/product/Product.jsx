import React from 'react';
import "./product.css"

const Product = ({ handelAddToCard, product }) => {
  const { name, category, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p className='product-prices'>Prices ${price}</p>
        <p className='seller'><b>Seller</b>:{seller}</p>
        <p className='ratings'>{ratings} Stars</p>
      </div>
      <button className='btn-card' onClick={() => handelAddToCard(product)}>
        <p>Add To Card</p>
      </button>
    </div>
  );
};

export default Product;