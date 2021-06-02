// function Rabbit(type,color){
//     this.type = type;
//     this.color = color;
// }
// Rabbit.prototype.speak = function(phrase){
//     console.log("The "+this.type+" rabbit who is "+this.color+" says "+phrase);
// }

// let zajak = new Rabbit("polar","white");
// console.log(zajak);

// zajak.speak("zdravo");


// let zajak = {type:type,color:color} // kako se pisuva obicen objekt 


// function Person(firstName, lastName, age, profession){
//     this.ime = firstName;
//     this.prezime = lastName;
//     this.godini = age;
//     this.profesija = profession;
// }

// Person.prototype.speak = function(phrase){
//     console.log(this.ime+":"+phrase);
// }

// let covek = new Person("Stefan","Simjanovski",22,"playa");
// covek.speak("CAO");



// class Avtobus{
//     constructor(marka,boja,registracija,godina){
//         this.marka = marka;
//         this.boja = boja;
//         this.registracija = registracija;
//         this.godina = godina;
//     }

//     pecati(){
//         console.log("Avtobusot "+this.marka+" so "+this.boja+" ima tablica "+this.registracija)
//     }
// }

// let jsp = new Avtobus("MAN","crvena",123,1998);
// jsp.pecati();


// class Location{
//     constructor(city){
//         this.city = city;
//     }

//    temperature(){
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=7bdf6e45f247392512dd880a79e530e6")
//        .then(response => response.json())
//        .then(json =>{
//            console.log(Math.round(json.main.temp))
//        })

//    }
// }

// let Skopje = new Location("Skopje",//jsp)
// Skopje.temperature();
// Skopje.//avtobus.pecati();


// class Person{
//     constructor(ime,prezime,profesija){
//         this.ime = ime;
//         this.prezime = prezime;
//         this.profesija = profesija;
//         this.nagradi = [];
//         this.location = new Location();
//     }
//     pecati(){
//         console.log(this.ime+" "+this.prezime+" "+this.profesija);
//     }
// }

// let users = [];
// let brojNaKorisnici = 1;

// for(let i = 0; i<brojNaKorisnici; i++){
//     let ime = prompt("Vnesi ime");
//     let prezime = prompt("Vnesi prezime");
//     let profesija = prompt("Vnesi profesija");
//     let grad = prompt("Vnesi grad");
//     let nagrada = prompt("Vnesi nagrada");

//     let korisnik = new Person(ime,prezime,profesija);
//     korisnik.location = new Location(grad);
//     korisnik.nagradi.push(nagrada);
//     users.push(korisnik);
// }

// for(user of users){
//     user.pecati();
//     user.location.temperature();
// }


class Employee {
    constructor(name, age, salary, tasks){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.tasks = [];
    }

    work(){
        let task = this.tasks.shift();
        console.log(this.name+" works on "+this.task);
    }
    collectSalary(){
        console.log("The salary is "+this.salary);
    }
}

class Senior extends Employee{
    constructor(name, age, salary, tasks, projects){
        super(name,age,salary,tasks);
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }
}

let senior = new Senior("stefan", 22, 400);
senior.collectSalary();
senior.projects = [];
senior.projects.push("nekoj task");
console.log(senior.getProjects());