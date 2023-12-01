import React from 'react';

const ShopProf = ({ profile }) => {
  return (
    <div>
      <h2>Shop Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Location: {profile.location}</p>
      {}
    </div>
  );
};

export default ShopProf;