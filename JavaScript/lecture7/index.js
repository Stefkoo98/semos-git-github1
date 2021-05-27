// function prvaFunkcija(){
//     console.log("Hello World");
// }
// prvaFunkcija();


// function greeting(name,age){
//     console.log("Hello,my name is "+name+" and I am "+ age);
// }
// greeting("Stefan",22);


// function greetingEnterValues(){
//     let name = prompt("Vnesi ime");
//     let age = prompt("Vnesi godini");
//     console.log("Hello,my name is "+name+" and I am "+ age)
// }
// greetingEnterValues();


// function zbir(x,y){
//     return x+y;
// }
// let rezultat = zbir(5,3); // eden nacin na dobivanje rezultat
// console.log(zbir(5,3)); // vtor nacin na dobivanje rezultat


// function proizvod(x,y){
//     return x*y;
// }
// console.log(proizvod(4,3)*1.2);


// function faktoriel(broj){
//     if(broj<0) return "greska";
//     else if(broj == 0 || broj == 1){
//         return 1;
//     }
//     else{
//         return broj*faktoriel(broj-1); // 5*faktoriel(4)->5*4*faktoriel(3)->5*4*3*faktoriel(2)->5*4*3*2*1;
//     }
// } 
// console.log(faktoriel(6)) // rekurzija ti e ova batko Cef

// for(i = 1; i<=6; i++){
//     console.log(faktoriel(i));
// }

 
// fat arrow functions
// let f = ()=>{console.log("zdravo")}; // prv nacin kade sto se definiraat zagradite,bez parametar 
// f();

// let zbirBroj10 = a=>a+10; // vtor nacin, eden parametar i edna naredbba
// console.log(zbirBroj10(10));

// let zbir = (a,b)=>a+b; // tret nacin, povekje od eden parametar, edna naredba
// console.log(zbir(5,3));

// let proizvod = (a,b)=>{
//     console.log("proizvodot na dvata broja e");
//     return a*b;
// }
// console.log(proizvod(2,3));



// call back functions // na parni broevi dava "hi", na neparni "bye"
// function greeting(){
//     console.log("hi");
// }
// function bye(){
//     console.log("bye");
// }
// function test(number,callback1,callback2){
//     if(number%2==0){
//         callback1();
//     }
//     else{
//         callback2();
//     }
// }
// test(1,greeting,bye);


// // po istekuvanje na vremeto se povikuva funkcijata
// setTimeout(()=>{
//     alert("Hi");
// },3000);

// setInterval(()=>{
//     alert("Interval");
// },2000);


// let niza = [5,4,1,2,0,5];

// niza.forEach((element,index)=>{
//     console.log("Na "+index+" pozicija se naogja "+element);
// })

// let niza2 = niza.map(element=>element*2);
// console.log(niza2);
// let niza2 = [];
// for(i = 0; i<niza.length;i++){
//     niza2[i]=niza[i]*2;
//     niza2.push(niza[i]*2);
// }

// let filteredArray = niza.filter(x=>x%2==0);
// console.log(filteredArray);

// let sum = niza.reduce((acc,curr)=>acc+curr)
// console.log(sum);


// let finalResult = niza.map(x=>x*2).filter(y=>y>2).reduce((acc,curr)=>acc+curr);
// console.log(finalResult);