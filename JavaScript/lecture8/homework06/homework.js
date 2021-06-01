// 1. Да се напише функција за печатење на листа во html со користење на низа како параметар и истата да се искористи за креирање на неколку листи.

let names = ['Stefan', 'Darko', 'Bojan', 'Zoran'];
let test = ['test1', 'test2', 'test3'];


let createLists = (niza) => {
  let unorderedList = document.createElement('ul');

  for (key of niza) {
    let listElement = document.createElement('li');
    listElement.innerText = key;
    unorderedList.appendChild(listElement);
  }

  document.body.appendChild(unorderedList);
}

createLists(names);
createLists(test);

// 2.Да се креира input елемент и копче во html и да се внесе вашето име или некој текст во Input полето. При кликање на копчето со alert да се прикаже она што е внесено.

// function enterAlert(){
//     let ime = document.getElementById("text").value;
//     alert("Imeto koe go vnesovte e "+ime);
// }
