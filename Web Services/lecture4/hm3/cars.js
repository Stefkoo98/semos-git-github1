const fs = require('./fs');
const carsDb = 'cars.json';

const create = async (carData) => {
    let data = await fs.read(carsDb);
    let id = 1;
    if (data.length !== 0) {
        id = data[data.length - 1].id + 1;
    }
    let car = {
        id,
        name: carData.name,
        model: carData.model,
        year: carData.year,
        engine: carData.engine,
    };
    data = [...data, car];
    await fs.write(carsDb, data);
    return car;
};

const getAll = async () => {
    let data = await fs.read(carsDb);
    return data;
};

const getOne = async (id) => {
    let data = await fs.read(carsDb);
    let car = data.filter(c => c.id === Number(id));
    if (car.length === 0) return null;
    return car[0];
};

const update = async (id, carData) => {
    let data = await fs.read(carsDb);
    data = data.map(c => {
        if (c.id === Number(id)) {
            c.name = carData.name;
            c.model = carData.model;
            c.year = carData.year;
            c.engine = carData.engine;
        }
        return c
    });
    await fs.write(carsDb, data);
};

const partialUpdate = async (id, carData) => {
    let data = await fs.write(carsDb);
    data = data.map(c => {
        if (c.id === Number(id)) {
            c.name = carData.name ? carData.name : c.name;
            c.model = carData.model ? carData.model : c.model;
            c.year = carData.year ? carData.year : c.year;
            c.engine = carData.engine ? carData.engine : c.engine;
        }
        return c;
    });
    await fs.write(carsDb, data)
};

const remove = async (id) => {
    let data = await fs.read(carsDb);
    let prevLength = data.length;
    data = data.filter(c => c.id !== Number(id));
    if (data.length === prevLength) {
        return false
    }
    await fs.write(carsDb, data)
    return true;
};


module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
}

