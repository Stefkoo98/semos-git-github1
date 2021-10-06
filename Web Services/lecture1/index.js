// console.log('Hello World!');
// console.dir('Hello World!');
// console.error('CRASH & BURN');
// let table = [
//     { fname: 'Stefko', lname: 'Simjanovski' },
//     { fname: 'Pece', lname: 'Petkovski' },
// ];
// console.table(table);


// setTimeout(() => {
//     console.log('prv');
// }, 2000);

// console.log('vtor');

// const myTimeout = (timeout) => {
//     return new Promise((success, fail) => {
//         setTimeout(() => {
//             console.log('prv');
//             success();
//         }, timeout);
//     });
// };

// myTimeout(2000)
//     .then(() => {
//         console.log('vtor');
//         return myTimeout(1000)
//     })
//     .then(() => {
//         console.log('tret')
//     })
//     .catch(err => {
//         console.log(err)
//     });

// const main = async () => {
//     try {
//         await myTimeout(2000);
//         console.log('vtor')
//         await myTimeout(1000);
//         console.log('tret')
//     } catch (err) {
//         console.log(err)
//     }
// };

// main();

// let niza = [1, 2, 3, 4, 5, 6, 7]

// let n2 = niza.map((value, i) => {
//     if (value % 2) {
//         return value * 10;
//     }
// });
// console.dir(n2);

// let n3 = niza.reduce((acc, value) => {
//     return acc + value
// });  // sobira prviot so vtoriot i go dodava vo acc i togas acc e vrednosta na tie 2 broja sobrani


let studenti = [
    { ime: 'Pero', prosek: 8 },
    { ime: 'Janko', prosek: 9 },
    { ime: 'Stanko', prosek: 6 },
    { ime: 'Ivan', prosek: 10 },
    { ime: 'Goran', prosek: 7 }
];

studenti.sort((a, b) => {
    return b.prosek - a.prosek
})

console.log(studenti)