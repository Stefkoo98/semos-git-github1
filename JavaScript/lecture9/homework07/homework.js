// 1.Da se ispecatat site emails od randomuser

// fetch("https://randomuser.me/api/?results=100")
// .then(response => response.json())
// .then(json =>{
//     let users = json.results;
//     console.log(users);

//     for(user of users){
//         console.log(user.email);
//     }
// }); 

// 2.Da se napravi niza od site gradovi na korisnicite, bez povtornuvanje

// fetch("https://randomuser.me/api/?results=10")
// .then(response => response.json())
// .then(json =>{
//     let gradovi = json.results;
//     console.log(gradovi);

//     let array = [];
//     for(niza of gradovi){
//         array.push(niza.location.city);
//     }
//     console.log(array);
// })

// 3.Da se prikaze temperaturata na gradot vnesen preku input pole od html
