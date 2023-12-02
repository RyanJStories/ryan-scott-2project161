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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
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
