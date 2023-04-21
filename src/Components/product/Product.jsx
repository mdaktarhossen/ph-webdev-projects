import React from 'react';
import "./product.css"

const Product = (props) => {
  const { name, category, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p className='product-prices'>Prices ${price}</p>
        <p className='seller'><b>Seller</b>:{seller}</p>
        <p className='ratings'>{ratings} Stars</p>
      </div>
      <button className='btn-card' onClick={() => props.handelar(props.product)}>
        <p>Add To Card</p>
      </button>
    </div>
  );
};

export default Product;