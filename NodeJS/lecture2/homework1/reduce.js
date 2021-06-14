let people = [
    { name: "Stefan", age: 24},
    { name: "Marko", age: 22},
    { name: "Milena", age: 50},
    { name: "Tamara", age: 35},
    { name: "Damjan", age: 30},
    { name: "Darian", age: 80},
    { name: "Natali", age: 66}
]

// let peopleAgeTotal = people.reduce((curr, lugje) =>{
//     return lugje.age + curr
// },0)

// console.log(peopleAgeTotal);


let godini = people.reduce((num,curr) => num + curr.age,0) / people.length;

console.log(godini);

