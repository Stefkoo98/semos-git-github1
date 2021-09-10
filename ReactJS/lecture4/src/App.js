import React, { useState, useEffect } from "react";

export function App() {

    const [promenliva1, setPromenliva1] = useState('Prva Vrednost')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [counter, setCounter] = useState(0)
    // function smeniVrednost() {
    //     setPromenliva1('Vtora Vrednost');
    // }



    function changedValue(event) {
        setUsername(event.target.value)
    };

    function changePass(event) {
        setPassword(event.target.value)
    };



    useEffect(() => {
        console.log('Username:', username);
        console.log('Password', password);
    }, [username, password])

    function showValues() {
        alert(`Username: ${username}\nPassword:${password}`);
    };

    return (
        <div id='app'>
            <h2>Yo!</h2>
            <p>{promenliva1}</p>
            <button onClick={() => { setPromenliva1('Vtora Vrednost') }}>Smeni Vrednost</button>
            <br />
            <br />
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={changedValue}
            />
            <br />
            <br />
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={changePass}
            />
            <br />
            <br />
            <button onClick={showValues}>
                Show Values
            </button>
            <br />
            <br />
            <img
                src="https://www.djmikebills.com/media/k2/items/cache/f75f45065e491a3adc61e72a384867bb_L.jpg"
                width="400px"
                height="450px"
                alt="hip-hop"
                onClick={() => { setCounter(counter + 1) }}
            />
            <p>Counter: {counter}</p>
        </div>
    )
}