const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  let name = 'Stefan Simjanovski'
  res.render('index', { title: 'Express', name: name });
});

module.exports = router;
