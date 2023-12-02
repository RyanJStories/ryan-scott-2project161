import React from 'react';
import Prices from './Prices';

const ShoppingCart = ({ selectedItems, handleCheckout }) => {
  const totalPrice = Prices.calculateTotal(selectedItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {selectedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;