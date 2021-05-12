// let broj = Number(prompt("vnesi broj"));
// let niza = [];

// for(i = 0; i<broj; i++){
//     let broj = Number(prompt());
//     niza.push(broj)
// }
// console.log(niza);


// let zbir = 0;

// for(i - 0; i<niza.length; i++){
//     if(niza[i]%2==1){
//         zbir+=niza[i];
//     }
// }
// console.log(zbir);


// let broj = prompt('Vnesi broj');
// console.log(isNaN(broj));
// let niza = [];

// if(isNaN(broj)){
//     console.log("Vnesovte karakter");
// }
// else{
//     while(!isNaN(broj)){
//         niza.push(broj);
//         broj = prompt("Vnesi broj");
//     }
// }
// console.log(niza);

// m1 = 5, m2 = 3;
// niza = [5,2,10]
// let max1 = niza[0];
// let max2 = niza[1];

// if(niza.length>2){
//     for(let i = 2; i<niza.length; i++){
//         if(niza[i]>max1){
//             max2 = max1;
//             max1 = niza[i];
//         }
//         else if(niza[i]>max2 && niza[i]<max1){
//             max2 = niza[i];
//         }
//     }
//     console.log(max1, max2);
// }

// console.log(niza.sort());
// console.log(niza[niza.length-1],niza[niza.length-2]);



// for(i = 0; i<10; i++){
//     for(j = 0; j<10; j++){ 
//         console.log(i,j);
//     }
// }


let fruits = [["Banana","Orange"],"Apple","Mango","Kiwi",["Lemon","Strawberry"]];

for(let i = 0; i<fruits.length; i++){
    // console.log(fruits[i]);
    if(Array.isArray(fruits[i])){
        let niza2 = fruits[i];
        for(j = 0; j<niza2.length; j++){
            console.log(niza2[j]);
        }
    }
}
