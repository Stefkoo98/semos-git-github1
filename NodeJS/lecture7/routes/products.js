const express = require('express');
const router = express.Router();

//simulirame povik do baza
const products = [
    {
        sku: 1231241,
        name: 'Power T-shirt',
        price: '55.31'
    },
    {
        sku: 82629496,
        name: 'Power Jacket',
        price: '44.54'
    },
    {
        sku: 77434883,
        name: 'Milan dress',
        price: '64.12'
    },
    {
        sku: 64234124,
        name: 'Red Rose on Orange Background',
        price: '41.99'
    }
]

router.get('/', (req, res) => {
    res.render('products', { products: products});
});

module.exports = router;