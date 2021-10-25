const fs = require('fs');
const express = require('express');
const api = express();

api.use(express.json());

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) return reject(err)
            return resolve(data);
        });
    });
};

const write = (fileName, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, content, (err) => {
            if (err) return reject(err)
            return resolve();
        });
    });
};

api.get('/students', async (req, res) => {
    try {
        let students = await read('students.json');
        let parsedStudents = JSON.parse(students);

        res.status(200).send(parsedStudents);
    }
    catch (err) {
        res.status(400).send(err);
    }
});

api.post('/students/:id', async (req, res) => {
    try {
        let students = await read('students.json');
        let parsedStudents = JSON.parse(students);
        let output = [...parsedStudents, req.body]
        let outputString = JSON.stringify(output);
        await write('students.json', outputString);
        res.status(201).send(req.body)
    }
    catch (err) {
        res.status(400).send(err)
    }
});





api.listen(4000, err => {
    if (err) {
        return console.log(err);
    }
    return console.log('Server successfully started on port 4000')
});