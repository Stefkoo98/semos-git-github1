const validator = require('../pkg/articles/validate');
const article = require('../pkg/articles');

const create = async (req, res) => {
    try {
        await validator(req.body);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad request');
    }

    try {
        let data = {
            ...req.body,
            author_id: req.user.uid
        };
        let out = await article.create(data);
        res.status(201).send(out);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Internal server error');
    }
};

const getAll = async (req, res) => {
    try {
        let articles = await article.getAll();
        return res.status(200).send(articles);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getMine = async (req, res) => {
    try {
        let articles = await article.getAllByUser(req.user.uid);
        return res.status(200).send(articles);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const getOne = async (req, res) => {
    try {
        let articles = await article.getOne(req.params.id);
        return res.status(200).send(articles);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error');
    }
};

const update = async (req, res) => {
    try {
        await validator(req.body, 'INSERT')
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
    try {
        await article.update(req.params.id, req.body, req.user.uid)
        res.status(204).send('ok')
    } catch (err) {
        console.log()
    }
};

const partialUpdate = async (req, res) => {
    try {
        await validator(req.body, 'UPDATE')
    } catch (err) {
        console.log(err)
        return res.status(400).send(err)
    }
    try {
        await article.partialUpdate(req.params.id, req.body, req.user.uid);
        return res.status(204).send('ok')
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error')
    }
};

const remove = async (req, res) => {
    try {
        await article.remove(req.params.id, req.user.uid);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal server error')
    }
};

module.exports = {
    create,
    getAll,
    getMine,
    getOne,
    update,
    partialUpdate,
    remove
};