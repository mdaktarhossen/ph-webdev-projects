import "./asid.css"

const Asid = (props) => {
  const { card } = props;
  console.log(card)
  let total = 0;
  let shipping = 0;
  for (const product of card) {
    total = total + product.price;
    shipping = shipping + product.shipping;

  };
  let tax = (total * 10 / 100).toFixed(2);
  return (
    <aside className='asid'>
      <h5>Order Summary</h5>
      <p>Selected Items: {card.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping Charge: {shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: $1559</h3>
      <div>
        <button>Clear Cart</button>
        <button>Review Order</button>
      </div>
    </aside>
  );
};

export default Asid;