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

// SpeedInsights API monitoring for vercel
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function handler(req, res) {
  SpeedInsights.track("API Monitor"); // Track performance
  res.status(200).json({ message: "API performance is being monitored!" });
}

// SpeedInsights API monitoring for vercel ending
module.exports = router;
