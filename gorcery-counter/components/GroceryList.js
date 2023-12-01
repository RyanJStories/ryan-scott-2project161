import React from 'react';

const GroceryList = ({ groceries }) => {
  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map((grocery, index) => (
          <li key={index}>{grocery}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;