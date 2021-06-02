// function pecati(message){
//     console.log(message);
// }

// function pecatiCatch(message){
//     console.log("Ova e poraka vo catch "+message);
// }

// let p = new Promise((resolve,reject)=>{

//     let a = 10;
//     if(a == 10){
//         resolve("success");
//     }
//     else{
//         reject("Failed");
//     }
// });

// // vo "then" se prakja funkcijata za resolve
// // vo "catch" se prakja funkcijata za reject

// p.then(pecati).catch(pecatiCatch);


// function get(url){
//     return new Promise((resolve,reject)=>{
//         let req = new XMLHttpRequest();
//         req.open("GET","file.txt",false);
//         req.send();

//         req.addEventListener("load",()=>{
//             if(req.status<400){
//                 resolve(req.responseText);
//             }
//             else{
//                 reject("error");
//             }
//         })

//         req.addEventListener("error",()=>{
//             reject(new Error("Network error"));
//         })

//     })
// }

// get("test.json").then((response)=>{
//     console.log(JSON.parse(response));
//     return "a";
// }).then((param)=>{
//     console.log(param);

// }).catch((error)=>{
//     console.log(error);
// })


// let p1 = new Promise((resolve,reject)=>{
//     resolve("p1");
// });

// let p2 = new Promise((resolve)=>{
//     resolve("p2");
// });

// let p3 = new Promise((resolve)=>{
//     resolve("p3");
// });

// Promise.all([p1,p2,p3]).then((message)=>{console.log(message)});


// fetch("https://randomuser.me/api/?results=10")
// .then(response => response.json())
// .then(json =>{
//     let users = json.results;
//     console.log(users);

//     let zbir = 0;
//     for(user of users){
//         zbir+=user.dob.age
//     }
//     console.log(zbir/users.length);
// }); 


// async function fetchWeather(){
//     const result = await fetch("https://randomuser.me/api/?results=10");
//     const data = await result.json();
//     console.log(data);
// }

// fetchWeather();