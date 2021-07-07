const express = require('express');
const api = express();

const cars = [
    {
        id: 1,
        model: "Audi"
    },
    {
        id: 2,
        model: "Mercedes"
    },
    {
        id: 3,
        model: "Nevera"
    }
];

api.use(express.json());

api
.get('/cars', (req, res) => {
    let filteredCars = cars;
    if(req.query.model){
        filteredCars = cars.filter(kola => kola.model == req.query.model)
    }
    res.send({
        message: 'ne kazuvam so ke vrakja :)',
        cars: filteredCars
    });
})
.get('/cars/:id', (req, res) => {
    const car = cars.filter(car => car.id == req.params.id)

    res.send({
        message: 'site koli vo database',
        cars: car
    });
})
.post('/cars', (req, res) => {    
    req.body.id = cars.length + 1;
    
    cars.push(cars);
    res.send(cars);
})

api.listen(3000, () => {
    console.log('Running..')
});