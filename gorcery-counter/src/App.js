import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import GroceryList from './GroceryList';
import ShoppingCart from './ShoppingCart';
import Prices from './Prices';
import ShopProfile from './ShopProfile';

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [prices, setPrices] = useState([]);

  const addToCart = (item) => {
    setCartItems([prices, cartItems, item]);
  };

  const checkForDiscount = (prices<20);

  

  return (
    <div className="Grocery Store">
      <header className="Grocery-Store">
        <img src={logo} className="Gross-app" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel=""
        >
     
        </a>
      </header>
      <div>
      <GroceryList addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} />
      <Prices prices={prices} />
      <ShopProfile />
    </div>
    </div>
  );
}

export default App;
