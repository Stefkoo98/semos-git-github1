const mongoose = require('mongoose');

let username = 'Dev';
let password = '';
let host = '';
let dbname = 'semosdb';

let dsn = `mongodb+srv://${username}:${password}@${host}/${dbname}?retryWrites=true&w=majority`; //connection string
//mongodb+srv://dev:devpwd@mongodb.org/students?retryWrite=true&w=true

mongoose.connect(
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to DB:', err);
        }
        console.log('Successfully connected to db');
    }
);