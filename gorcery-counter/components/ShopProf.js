import React, { useState } from 'react';

const ShopProf = ({ profile }) => {
  const [recentPurchase, setRecentPurchase] = useState([]);

  const storeRecentPurchase = (cartItems) => {
    setRecentPurchase(cartItems);
  };

  return (
    <div>
      <h2>Shop Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Location: {profile.location}</p>
      <p>Height: {profile.height}</p>
      <p>Weight: {profile.weight}</p>
      <p>Rewards Member: {profile.rewardsCheck}</p>
      <img src={profile.picture} alt="Profile Picture" />

      {}
      <div>
        <h3>Most Recent Purchase:</h3>
        <ul>
          {recentPurchase.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopProf;
