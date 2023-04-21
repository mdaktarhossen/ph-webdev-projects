import React, { useEffect, useState } from 'react';
import "./products.css"
import Product from '../product/Product';
import Asid from '../Asid/Asid';

const Products = () => {
  const handelar = (product) => {
    console.log(product)
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className='container'>
      <div className="products-container">
        {
          products.map((product) => <Product key={product.id} product={product} handelar={handelar}>

          </Product>)
        }
      </div>
      <div className="card-container">
        <Asid />
      </div>
    </div >
  );
};

export default Products;