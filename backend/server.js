const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON

// Define routes
app.get('/api/search', (req, res) => {
    const { code } = req.query;
    const products = [
        { name: 'Macbook Air 13 inch', code: 'ASO1544STT', price: 100 },
        { "name": "Macbook Pro 16 inch", "code": "ASO1544TTS", "price": 200 },
        // Add more products as needed
    ];
    const product = products.find((p) => p.code === code);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1>Its working.</p>');
});


