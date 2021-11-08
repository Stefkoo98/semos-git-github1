const { Validator } = require('node-input-validator');

const ArticleCreate = {
    title: 'required|minLength:1',
    content: 'required|minLength:1',
    publish_date: 'required|minLength:1'
};

const ArticleUpdate = {
    title: 'minLength:1',
    content: 'minLength:1',
    publish_date: 'minLength:1'
};

const validate = async (data, schema) => {
    let sch;
    switch (schema) {
        case 'INSERT':
            sch = ArticleCreate;
            break;
        case 'UPDATE':
            sch = ArticleUpdate;
            break
    }
    let v = new Validator(data, sch);
    let e = await v.check();
    if (!e) {
        throw v.errors
    }
};

module.exports = validate;