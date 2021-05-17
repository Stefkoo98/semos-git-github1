// 1. Да се напише програма коjа во опсег од 1 до n (внесен од тастатура) ќе го определи броjот на броеви што се деливи со 3, при делењето со 3 имаат остаток 1, односно 2.
// Забелeшка: Задачата да се реши со while, do. . . while и for
// Објаснување: Колку броеви имаат остаток 0, колку 1, а колку остаток 2

// let n = Number(prompt("vnesi broj"));

// let ostatokNula = 0;
// let ostatokEden = 0;
// let ostatokDva = 0;

// for(let i = 1; i<=n ; i++){
//     if(i % 3 === 0){
//         ostatokNula++;
//     }
//     else if(i % 3 === 1){
//         ostatokEden++;
//     }
//     else{
//         ostatokDva++;
//     }
// }
// console.log(ostatokNula);
// console.log(ostatokEden);
// console.log(ostatokDva);



// 2. Да се напише програма коjа на екран ќе ги испечати сите четири-цифрени броеви каj кои збирот на трите наjмалку значаjни цифри е еднаков со наjзначаjната цифра  Пр:4022 4=0+2+2.


// for(let i = 1000; i<9999; i++){
//     let edinici = i%10;
//     let desetki = Math.floor(((i % 100) - edinici) / 10);
//     let stotki = Math.floor(((i % 1000) - (desetki + edinici)) / 100);
//     let iljadarki = Math.floor(i / 1000);

//     if(iljadarki === edinici + desetki + stotki){
//         console.log(i);
//     }
// }



// 3. Да се напише програма во која за внесен број n од тастатурa ќе полните низа со користење на соодветната наредба Пр: n=10 во низата треба преку тастатура да внесете 10 броеви

// let broj = Number(prompt("vnesi broj"));
// let niza = [];

// for(i = 0; i<broj; i++){
//     niza[i]= prompt();
// }
// console.log(niza);
