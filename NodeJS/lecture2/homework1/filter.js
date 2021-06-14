// let coveciRazbiras = [
//     { name: "Stefan", age: 24},
//     { name: "Marko", age: 22},
//     { name: "Milena", age: 50},
//     { name: "Tamara", age: 35},
//     { name: "Damjan", age: 30},
//     { name: "Darian", age: 80},
//     { name: "Natali", age: 66}
// ]

// let filteredCoveci = coveciRazbiras.filter((people) =>{
//     return people.age <= 38
// })

// console.log(coveciRazbiras);
// console.log(filteredCoveci);


// let namesOfCoveciRazbiras = coveciRazbiras.filter((iminja) =>{
//     return iminja.name.startsWith ("D")
// })

// console.log(coveciRazbiras);
// console.log(namesOfCoveciRazbiras);


let people = [
    { name: "Stefan", lastName: "Petkov", age: 24},
    { name: "Stefan", lastName: "Stojkov", age: 22},
    { name: "Stefan", lastName: "Seker", age: 50},
    { name: "Damjan", lastName: "Gruev", age: 35},
    { name: "Damjan", lastName: "Panika", age: 30},
    { name: "Darian", lastName: "Konopiski", age: 80},
    { name: "Natali", lastName: "Jovanova", age: 66}
]

let filterdPeople = people.filter((prezime) =>{
    return prezime.name.includes ("Stefan")
})

console.log(people);
console.log(filterdPeople);