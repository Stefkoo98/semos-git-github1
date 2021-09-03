import React from 'react';
import { Welcome } from './components/Welcome';
import { Comments } from './components/Comments';
import { Students } from './components/Students';
import { StudentClass } from './components/StudentClass';
import { FruitList } from './components/FruitList';
import { Example } from './components/Example';

const name = 'Stefko';

let student = {
  name: 'Stef',
  address: 'Skopje',
  indexNum: 124535
};

const number = 5;
const ime = "PERO"
const objekt = {
  long: "42.5",
  lat: "44.3"
}


let listaNaOvosja = ["apple", "banana", "peach"]


export function App() {

  return (
    <div id="app">
      <h2>Setup Works</h2>
      <Example number={number} ime={ime} objekt={objekt} />
      <StudentClass ucenik={student} />
      <Welcome ime={name} prezime={"Simjanovski"} age={23} />
      <Comments hasComments={true} multipleComments={false} student={student} />
      <Welcome ime={"Mile"} prezime={"Panika"} age={20} dopolnitelenAtribute="randomValue" />
      <Students student={student} />
      <FruitList listOfFruits={listaNaOvosja} />
    </div>
  )
}
