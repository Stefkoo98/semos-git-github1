const express = require('express');

const api = express();
api.use(express.json());

const duktori = [];

api.post('/users', (req, res) => {
    duktori.push(req.body);

    res.send(duktori);
});

// api.get('/users', (req, res) => {   
//     res.send(duktori)
// })


api.listen(3000, () => {
    console.log('Running..')
}); 



// NE  E DOPRAENO!!