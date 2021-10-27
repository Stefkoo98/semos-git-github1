const express = require('express');
const carHandlers = require('./car-handlers');
const api = express();

api.use(express.json());

api.get('/cars', carHandlers.create);
api.post('/cars', carHandlers.getAll);
api.get('/cars/:id', carHandlers.getOne);
api.put('/cars/:id', carHandlers.update);
api.patch('/cars/:id', carHandlers.partialUpdate);
api.delete('/cars/:id', carHandlers.remove);


const bookHandlers = require('./book-handlers');

api.get('/books', bookHandlers.create);
api.post('/books', bookHandlers.getAll);
api.get('/books/:id', bookHandlers.getOne);
api.put('/books/:id', bookHandlers.update);
api.patch('/books/:id', bookHandlers.partialUpdate);
api.delete('/books/:id', bookHandlers.remove);



api.listen(4000, err => {
    if (err) {
        return console.log(err)
    }
    console.log('Services started on port 4000')
});