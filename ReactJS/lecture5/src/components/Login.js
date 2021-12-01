import React, { useState, useEffect } from "react";
import { Input } from "./Input";

export const Login = () => {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fieldType, setFieldType] = useState('password')


    useEffect(() => {
        console.log(`Username: ${username}\nPassword: ${password}`)
    }, [username, password]);

    function setToggle() {
        setFieldType(
            fieldType === "password" ? "text" : "password"
        )
    };


    function handleSubmit(event) {
        event.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`)
    };

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value) }}
                    name={"username"}
                />
                <Input
                    type={fieldType}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    name="password"
                    toggle={setToggle}
                />

                <button className="action-button">
                    Sign In
                </button>
            </form>
        </div>
    )
}