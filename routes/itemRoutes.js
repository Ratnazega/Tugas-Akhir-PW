const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

// Dashboard
router.get('/dashboard', verifyToken, (req, res) => {
  // contoh data dummy items
  const items = [
    { name: 'Samsung', category: 'Electronics', price: 3000000, stock: 10, location: 'Rak A-01' },
    { name: 'Laptop', category: 'Electronics', price: 5000000, stock: 5, location: 'Rak B-02' },
    { name: 'Kertas HVS', category: 'Stationery', price: 5000, stock: 100, location: 'Rak C-05' }
  ];

  res.render('dashboard', { user: req.user, items });
});

module.exports = router;
