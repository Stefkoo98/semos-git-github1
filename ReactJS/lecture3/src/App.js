import React from 'react';
import { Domasna } from './components/Domasna';
import { Comments } from './components/Comments';
import { Car } from './components/Car';

const user1 = {
  ime: "Stefko",
  username: "Simke",
  mail: "simjan123@outlook.com"
}

const user2 = {
  ime: "Toso",
  username: "Mali",
  mail: "batko33@outlook.com"
}


let comments = [
  { author: "Stefan", content: "This is my first comment" },
  { author: "Marija", content: "This is my second comment" },
  { author: "Sara", content: "This is getting ridiculious" }
]

let registracija = [
  { grad: { naselba: 'Nesto1', ulica: 'Ulica1' }, oznaka: 'SK-0000-AA' },
  { grad: { naselba: 'Sesto2', ulica: 'Ulica2' }, oznaka: 'GV-3400-AB' },
  { grad: { naselba: 'Zesto3', ulica: 'Ulica3' }, oznaka: 'DB-0030-AO' },
]


let cars = [
  { brand: 'Audi', model: 'A8', year: 2010, plates: registracija[0] },
  { brand: 'Mercedes', model: 'S500', year: 1998, plates: registracija[1] },
  { brand: 'Zastava', model: 101, year: 1985, plates: registracija[2] }
]




export function App() {

  return (
    <div id="app">
      <h2>Welcome S </h2>
      <Car datum='06-09-1992' vozila={cars} />
      <Domasna
        korisnik1={user1}
        korisnik2={user2}
        prikaziPrv={true}
        prikaziVtor={true}
      />
      <Comments komentari={comments} cifra={24} />
    </div>
  )
}
