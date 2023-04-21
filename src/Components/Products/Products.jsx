import { useEffect, useState } from "react";
import "./products.css"
import Product from "../product/Product";
import Asid from "../Asid/Asid";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handelAddToCard = (product) => {
    const newCard = [...card, product];
    setCard(newCard);
  }

  return (
    <div>
      <div className="container">
        <div className="cards">
          {products.map(product => <Product
            key={products.id} product={product}
            handelAddToCard={handelAddToCard}
          >

          </Product>)}
        </div>
        <div className="asid">

          <Asid card={card} />
        </div>
      </div>
    </div>
  );
};

export default Products;