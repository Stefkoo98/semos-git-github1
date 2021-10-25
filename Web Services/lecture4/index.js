const express = require('express');
const handlers = require('./handlers');

const api = express();

api.use(express.json());

// [] --> 1
// [1, 2, 3, 4, 5] --> 6

api.post('/students', handlers.create);
api.get('/students', handlers.getAll);
api.get('/students/:id', handlers.getOne);
api.put('/students/:id', handlers.update);
api.patch('/students/:id', handlers.partialUpdate);
api.delete('/students/:id', handlers.remove);

api.listen(4000, err => {
    if (err) {
        return console.log(err);
    }
    return console.log('Server successfully started on port 4000')
});