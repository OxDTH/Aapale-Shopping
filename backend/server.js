const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON

// Define routes
app.get('/api/search', (req, res) => {
    const { code } = req.query;
    const products = [
        { name: 'Macbook Air 13 inch', code: 'ASO1544STT' },
        { name: 'Macbook Pro 16 inch', code: 'ASO1544TTS' },
        { name: 'Vision Pro', code: 'ASO56XY1T4P9' },
        { name: 'Mac mini', code: 'ASO87KJ29L' },
        { name: 'Mac studio', code: 'ASO93MXY1Z' },
        { name: 'Mac Pro', code: 'ASO5ZP4L8Q' },
        { name: 'Pro Display', code: 'ASO12JK8W3' },
        { name: 'Magic Mouse', code: 'ASO9PXY72ML3Q' },
        { name: 'Aapale Watch Series 9', code: 'ASO1B6P9QR' },
        { name: 'Aapale Watch Ultra 2', code: 'ASO72LK56M' },
        { name: 'Airtag', code: 'ASO3XZ90PQ' },
        { name: 'Alpine Loop Indigo', code: 'ASO6YZ4JN1' },
        { name: 'Gold Milanese', code: 'ASO92MLX87' },
        { name: 'Graphite Milanese', code: 'ASO4JK29TR' },
        { name: 'Hermes Stour Bridon', code: 'ASO59QP4YW' },
        { name: 'Homepod Mini', code: 'ASO1X8MZ72' },
        { name: 'Homepod', code: 'ASO3P9KL56' },
        { name: 'ipad Pro', code: 'ASO87YW1XZ' },
        { name: 'iPhone 15 Pro', code: 'ASO92T4JK8' },
        { name: 'iPhone 16 Plus', code: 'ASO6XY5MZ9' },
        { name: 'Laptop Sleeve', code: 'ASO7JN1P4LK' },
        { name: 'Magic Keyboard', code: 'ASO93QR8Z57' },
        { name: 'Modern Buckle Lavander', code: 'ASO1XZ92YW' },
        { name: 'Nike Sport Band', code: 'ASO4JK72T9M' },
        { name: 'Nike Sport Loop Game', code: 'ASO8P5XY6QR' },
        { name: 'Ocean Band Blue', code: 'ASO9Z3KL87W' },
        { name: 'Silver Bracelet', code: 'ASO56ML1X8T' },
        { name: 'Soft Mint Sport Loop', code: 'ASO92YW4JK29' },
        { name: 'Sport Band Light Blue', code: 'ASO3Z9PXY57Q' },
        { name: 'trackpad', code: 'ASO1X87LK6TZ' },
        { name: 'USB-C to MagSafe 3 Cable', code: 'ASO4ML93QR5N' },
        { name: 'USB-C-PowerAdapter', code: 'ASO8Z7YW2KL9' },
        { name: 'Yellow Braided Loop', code: 'ASO3JK29M8Z7' },
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

