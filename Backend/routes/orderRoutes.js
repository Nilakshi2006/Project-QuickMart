// Defines API endpoints (URLs) and connects them to controller functions.
const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order saved successfully', order });
  } catch (error) {
    console.error('Order Save Error:', error);
    res.status(500).json({ message: 'Failed to save order', error });
  }
});

module.exports = router;
