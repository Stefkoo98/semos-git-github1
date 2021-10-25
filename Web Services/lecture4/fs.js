const fs = require('fs');

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) return reject(err);
            data = JSON.parse(data)
            return resolve(data);
        });
    });
};

const write = (fileName, content) => {
    return new Promise((res, rej) => {
        content = JSON.stringify(content)
        fs.writeFile(fileName, content, err => {
            if (err) return rej(err)
            return res()
        });
    });
};

module.exports = {
    read,
    write
};