import React from 'react';

const Prices = ({ prices }) => {
  return (
    <div>
      <h2>Prices</h2>
      <ul>
        {Object.keys(prices).map((item, index) => (
          <li key={index}>
            {item}: ${prices[item]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prices;