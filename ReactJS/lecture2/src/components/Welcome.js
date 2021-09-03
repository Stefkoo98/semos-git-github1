import React from 'react'

export const Welcome = (props) => {

    console.log(props);
    return (
        <div>
            <h2>Welcome {props.ime} {props.prezime}</h2>
            <p>Age : {props.age}</p>
        </div>
    )
}