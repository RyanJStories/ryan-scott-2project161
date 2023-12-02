import React from 'react';

const GroceryList = ({ options, handleSelect }) => {
  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {options.map((item, index) => (
          <li key={index}>
            <button onClick={() => handleSelect(item)}>{item}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;