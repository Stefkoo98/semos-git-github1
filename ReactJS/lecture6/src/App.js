import React, { useState, useEffect } from 'react';
import { Todos } from './components/Todos';

export function App() {

  const [person, setPerson] = useState({ firstName: '', lastName: '' })
  const [car, setCar] = useState({ model: 'Yugo', year: 1986 });
  const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday'])
  const [todos, setTodos] = useState(
    [
      { id: 0, todoText: 'React Course', done: false },
      { id: 1, todoText: 'Eat Dinner', done: false },
      { id: 2, todoText: 'Go to  Sleep', done: false }
    ]);

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    console.log(todos)
  }, [todos])


  function updateCar() {
    setCar({
      ...car,
      year: 2001
    })
  }


  function addDays() {
    setDays([...days, 'Thursday'])
  }

  function addTodo() {
    if (newTodo.trim() !== '') {
      let newObject = {
        id: todos.length,
        todoText: newTodo,
        done: false
      }
      setTodos([...todos, newObject]);
      setNewTodo(''); //se resetira vrednosta
    } else {
      alert('No value entered!\nPlease enter text to add a new item')
    }
  }

  function markTodoAsDone(todo) {
    setTodos([
      ...todos.map(item => (item.id === todo.id) ?  //go baram kliknatiot element po id
        { id: item.id, todoText: item.todoText, done: !item.done }
        : item //za site ostanati vrati gi istite
      )
    ])
  }

  return (
    <div id="app">
      <input
        type="text"
        placeholder="Enter First Name"
        value={person.firstName}
        onChange={(e) => { setPerson({ ...person, firstName: e.target.value }) }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={person.lastName}
        onChange={(e) => { setPerson({ ...person, lastName: e.target.value }) }}
      />

      <h2>Car:</h2>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <button onClick={updateCar}>
        Buy new car
      </button>

      <ul>
        {days.map((day, index) => {
          return (
            <li key={index}>
              {day}
            </li>
          )
        })}
      </ul>

      <button onClick={addDays}>
        Add Day
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter New Todo"
        value={newTodo}
        onChange={(e) => { setNewTodo(e.target.value) }}
      />
      <button onClick={addTodo}>Add New Todo</button>
      <Todos listOfTodos={todos} markTodoAsDone={markTodoAsDone} />
    </div>
  )
}
