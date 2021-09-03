import React from 'react';

export function Students(props) {

    console.log(props)
    return (

        <div id="students">
            <h2>Student Name: {props.student.name} </h2>
            <h5>Student Address: {props.student.address} </h5>
            <p>Index Number: {props.student.indexNum} </p>
        </div>
    )
}