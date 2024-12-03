const express = require('express');
const router = express.Router();
const products = require('../data/products.json');

router.get('/search', (req, res) => {
    const { code } = req.query;
    const product = products.find((p) => p.code === code);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});


module.exports = router;
