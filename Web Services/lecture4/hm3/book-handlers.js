const books = require('./books');

const create = async (req, res) => {
    try {
        let condition = !req.body.name
            || !req.body.author
            || !req.body.genre
            || !req.body.year
            || !req.body.price
        if (condition) {
            return res.status(400).send('Bad Request')
        }
        let b = await books.create(req.body)
        res.status(201).send(b);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

const getAll = async (req, res) => {
    try {
        let data = await books.getAll();
        res.status(201).send(data);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
};

const getOne = async (req, res) => {
    try {
        let b = await books.getOne(req.params.id);
        if (!b) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(b);
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
};

const update = async (req, res) => {
    try {
        let condition = !req.body.name
            || !req.body.author
            || !req.body.genre
            || !req.body.year
            || !req.body.price
        if (condition) {
            return res.status(400).send('Bad Request');
        }
        await books.update(req.params.id, req.body);
        res.status(204).send();
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
};

const partialUpdate = async (req, res) => {
    try {
        let condition = req.body.name
            || req.body.author
            || req.body.genre
            || req.body.year
            || req.body.price
        if (!condition) {
            res.status(400).send('Bad Request')
        }
        await books.partialUpdate(req.params.id, req.body);
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
};

const remove = async (req, res) => {
    try {
        if (await books.remove(req.params.id)) {
            res.status(204).send();
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
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