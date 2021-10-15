const fs = require('fs');

// const file = (fileName) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, (err, data) => {
//             if (err) return reject(err);
//             return resolve(data);
//         })
//     })
// }
// file('demo.txt')
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const write = (file, data) => {
//     return new Promise((res, rej) => {
//         fs.writeFile(file, data, (err) => {
//             if (err) return rej(err);
//             return res(data);
//         })
//     })
// }
// write('senfko.txt', 'yo, wassupp') // THEN/CATCH
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const writefile = async () => {
//     try {
//         await write('t2.txt', 'taman e ');
//     }
//     catch (err) {
//         console.log(err);  // ASYNC/AWAIT
//     }
// }
// writefile();

const read = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) return reject(err);
            return resolve(data);
        });
    });
};

const write = (fileName, content) => {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, content, err => {
            if (err) return rej(err)
            return res()
        });
    });
};

const main = async () => {
    try {
        let data = await read('data.json');
        let parsedData = JSON.parse(data); // 1 cekor
        // prosek nad 7.5
        let output = parsedData.filter(d => d.prosek > 7.5); // 2
        let outputString = JSON.stringify(output); // 3
        await write('filtered_data.json', outputString);
        // iminja sto pocnuvaat na P
        let pnames = parsedData.filter(d => d.ime.toLowerCase()[0] === 'p')
        let pnamesString = JSON.stringify(pnames);
        await write('pnames_data.json', pnamesString);
    } catch (err) {
        console.log(err);
    }
};

main();


