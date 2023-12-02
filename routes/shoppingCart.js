const express = require('express');
const router = express.Router();

let shoppingCart = [];

router.get('/', (req, res) => {
  res.json(shoppingCart);
});
router.post('/add', (req, res) => {
  const { items } = req.body; 

  shoppingCart.push(...items);

  res.json({ message: 'Items added to the shopping cart', cart: shoppingCart });
});

router.post('/checkout', (req, res) => {
  const purchasedItems = [...shoppingCart];
  shoppingCart = []; 

  res.json({ message: 'Checkout successful', purchasedItems });
});

module.exports = router;
