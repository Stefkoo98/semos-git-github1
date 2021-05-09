// 1. Proizvod na site parni broevi od 1 do 100

// let number = 100;
// let zbir = 0;

// while(number > 0){
//     if(number % 2 == 0){
//         zbir += number;
//     }
//     number--;
// }
// console.log(zbir)




// 2. Да се напише програма што ´ке овозможи претворање на двоцифрените броеви во зборови на следниот начин: За двоцифрениот борj 89 на екран ´ке се испечати "osum devet".

// let i = prompt('Vnesi broj');
// let array = i.split('');

// while(array.length > 0){
//     let zbir = Number.parseInt(array.shift());

//     if(zbir === 1){
//         console.log('eden');
//     }
//     else if(zbir === 2){
//         console.log('dva');
//     }
//     else if(zbir === 3){
//         console.log('tri');
//     }
//     else if(zbir === 4){
//         console.log('cetiri');
//     }
//     else if(zbir === 5){
//         console.log('pet');
//     }
//     else if(zbir === 6){
//         console.log('sest');
//     }
//     else if(zbir === 7){
//         console.log('sedum');
//     }
//     else if(zbir === 8){
//         console.log('osum');
//     }
//     else if(zbir === 9){
//         console.log('devet');
//     }
//     else if(zbir === 0){
//         console.log('nula');
//     }
// }




// 3. Da se presmeta y=x^n (x na stepen n)

let x = Number.parseInt(prompt('Vnesi X'));
let n = Number.parseInt(prompt('Vnesi N'));
let y = 1;

while(n > 0){
    y = y * x;
    n--;
}
console.log(y);