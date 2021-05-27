// let person = {ime:"Stef", prezime:"Simjanovski", godini:22};
// console.log(person.ime);
// console.log(person["ime"]);
// console.log(Object.keys(person)); //  vrakja niza od klucevi
// console.log(Object.values(person)); // vrakja niza od vredonsti

// person.email = "Stefkoo@outlook"; // na ovooj nacin se dodava novo svojsto
// console.log(person);

// delete person.email;
// console.log(person);


// let kola = {motor:"3.0",proizvoditel:"Audi",godina:2020,model:"A6",boja:"siva"};

// let klucevi = Object.keys(kola); // pokazuva site klucevi vo promenlivata
// console.log(klucevi.length);

// for(let i = 0; i<klucevi.length; i++){
//     // console.log(klucevi[i]);
//     let kluc = klucevi[i];
//     console.log(kluc+":"+ kola[kluc]);
// }



// let film = {ime:"theItalianJob", zanr:"actionCrime", akteri:["Jason Statham", "Mark Wahlberg","Charlize Theron"]};
// console.log(film);

// film.akteri.push("Stefko");

// console.log(film)


// let niza = [10,12,4,5,8,3];

// // "for" za nizi    niza[i]  - za sekoj element od niza
// for(element of niza){
//     console.log(element) 
// }

// "for" za objekti
// for(kluc in kola){
//     console.log(kluc+"="+kola[kluc]);
// }



// let testovi = [{ime:"Stefan",poeni:97},{ime:"Tamara",poeni:80}];
// let zbir = 0;

// for(prosek of testovi){
//     zbir += prosek.poeni;
// }
// console.log(zbir/testovi.length);
