// 1.Да се напише објект кој ќе содржи повеќе клуч-вредност парови, каде што вредностите ќе бидат од тип стринг, број, низа и објект.Да се испечатат сите својства на објектот во следниот формат клуч: вредност. Доколку вредноста е низа да се напишат елементите од низата во нов ред со празни места пред елементот

// let objects = {
//     ime:"Stefko",
//     broj:24,
//     niza:[2,4,5,6],
//     obj:{ime:"Stefko",prezime:"Simjanovski",broj:28}
// }
// console.log(objects);

// 2.Напишете функција која враќа количник на два броја. Ако вториот број е 0 потребно е да врати -1 и да испечати грешка

// let delenje = (number1, number2) => {
//     if (number2 === 0) {
//       return -1;
//     }
  
//     return number1 / number2;
//   }
//   console.log(delenje(2,-2))
 

// 3.Да се напише рекурзивна функција за пресметување на збир од 0 до n.

// let sum = (n) => {
//     if (n !== 0) {
//       return n + sum(n - 1);
//     }
//     return n;
//   }
// console.log(sum(5))

// 4.Да се напише низа од броеви и од неа да се направи нова низа со броевите*2+индексот
   
// let niza = [2,4,6,10,12];

// let nizaBroevi = niza.map((x, index) => x *2+index)
// console.log(nizaBroevi);
    
// 5.Да се напише низа фудбалски тим која ќе се состои фудбалери за кои ќе дефинирате име и неговите години. Да се пресмета просечната возраст.

// let Milan = [{ime:"Zlatan", godini:29},
// {ime:"Gianluigi", godini:22}, 
// {ime:"Hakan", godini:27}, 
// {ime:"Mario", godini:35}, 
// {ime:"Fikayo", godini:23},
// {ime:"Ante", godini:27}];

// let godini = Milan.reduce((num,curr)=> num + curr.godini,0) / Milan.length;

// console.log(godini);