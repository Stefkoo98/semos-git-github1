// if (uslov){

// }

// let broj = 10;
// if(broj>=10){
//     console.log("Brojot e pogolem od 10");
// }

// let broj1 = Number(prompt("Vnesi broj"));

// if((broj1%2)==0){
//     console.log("Brojot sto go vnesovte e paren")
// }

let ime = "Semos"
// // if(ime == "Semos"){
// //     console.log("imeto e "+ime);
// // }

// if(ime != "semos"){
//     console.log("imeto ne e semos");
// }

// console.log(ime!="semos");
// console.log(5!=="5");

// if(ime == "semos"){
//     console.log("imeto e ednakvo na semos");
// }

// else{
//     console.log("imeto ne e ednakvo na semos");
// }

// if(ime == "semos"){
//     console.log("imeto e ednakvo na semos");
// }

// else if(ime == "Semos"){
//     console.log("imeto e Semos");
// }
// else{
//     console.log("imeto ne e nitu semos nitu Semos");
// }

// let age = prompt("Kolku godini imas?")

// if(age<18){
//     console.log("pomalku od 18")
// }
// else{
//     console.log("poveke od 18")
// }


// let subject = "Javascript";
// let book = "javascript";

// if (subject == "Php"){
//     console.log("predmetot e PHP");
// }
// else if(subject == "Java" && book =="Java"){
//     console.log("Knigata za java e dostapna");
// }
// else if(subject == "Javascript" && (book =="Javascript" || book =="javascript")){
//     console.log("Knigata za javascript e dostapna");
//     let subject = 100;
//     console.log(subject);
// }
// else{
//     console.log("Knigata ne e dostapna");
// }
// console.log(subject);



// let ocena = 3;

// switch(ocena){
//     case 1:
//         console.log("dobivate 1");
//         break;
//     case 2:
//         console.log("dobivate 2");
//         break;
//         default: console.log("dobivate 3");
// }


let color = "purple";
let fruits = new Array("apple, orange, bannana, blueberry");  //ne se koristi tolku cesto
let colors = ["red", "green", "blue", color];
let empty = [];

let idx = 3;
console.log(fruits);
console.log(colors[2]);
console.log(colors[idx]);

console.dir(colors);
console.log(colors.length); //ja pectaime dolzinata na nizata

colors.push("white"); //dodava na kraj na listata
console.log(colors);
let lastElement = colors.pop(); //go briseme posledniot element od nizata i go smestuvame vo lastElement
console.log(colors);
let firstElement = colors.shift() // go brise prviot element od nizata
console.log(colors);
colors.unshift("black"); // dodava na pocetok na nizata
console.log(colors);



//toString, sort, join, split, supstream.. da si proveris bato Stefan