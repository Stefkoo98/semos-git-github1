//while, do-while, for -ciklusi
// while(uslov){ // naredbite se izvrsuvaat dodeka uslovoot e tocen
//     naredbi;
// }

// let i = 0;

// while(i<=10){
//     console.log(i++);
// }
// ke ispecati od 0 do 10 

// let i = 1;
// let zbir = 0;

// while(i<=10){
//     zbir+=i;
//     i++;
// }

// console.log(zbir);

// let i = 0;

// while(i<=10){
//     if(i%2 == 0){
//         console.log(i);
//     }
//     i++
// }



let broj= Number(prompt("Vnesi broj"))

let i = 0;
let zbir = 0; 

while(i<=broj){
    if(i%2==1){
        zbir+=i;
    }
    i++;
}
console.log(zbir);

