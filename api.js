const express = require('express');
const router = express.Router();
const { Product } = require('./models');

// Get all products
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add item to cart (dummy endpoint for now)
router.post('/cart', (req, res) => {
    const { productId, quantity } = req.body;
    res.json({ message: 'Item added to cart' });
});

// Checkout (dummy endpoint for now)
router.post('/checkout', async (req, res) => {
    const { userId, paymentInfo } = req.body;
    res.json({ message: 'Checkout successful' });
});

module.exports = router;