const cars = require('./cars');

const create = async (req, res) => {
    try {
        let condition = !req.body.name
            || !req.body.model
            || !req.body.year
            || !req.body.engine;
        if (condition) {
            return res.status(400).send('Bad Request')
        }
        let c = await cars.create(req.body);
        res.status(201).send(c);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getAll = async (req, res) => {
    try {
        let data = await cars.getAll();
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getOne = async (req, res) => {
    try {
        let c = await cars.getOne(req.params.id);
        if (!c) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(c);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const update = async (req, res) => {
    try {
        let condition = !req.body.name
            || !req.body.model
            || !req.body.year
            || !req.body.engine
        if (condition) {
            return res.status(400).send('Bad Request');
        }
        await cars.update(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
};

const partialUpdate = async (req, res) => {
    try {
        let condition = req.body.name
            || req.body.model
            || req.body.year
            || req.body.engine
        if (!condition) {
            return res.status(400).send('Bad request');
        }
        await cars.partialUpdate(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const remove = async (req, res) => {
    try {
        if (await cars.remove(req.params.id)) {
            res.status(204).send();
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    partialUpdate,
    remove
};

