import React from "react";
import axios from "axios";
import ls from "local-storage"
import { useNavigate } from "react-router-dom";


export default function Login() {
    let navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault()
        const response = await axios.post("http://localhost:80/login", {
            email: document.querySelector("#email").value,
            password: document.querySelector("#psw").value
        })
        if (response.status === 200) {
            ls('userId', response.data.userId);
            ls('username', response.data.userName);
            navigate("/")
        }
    }
    return (
        <div className="app">
            <form action="http://localhost:80/login" method="POST" onSubmit={handleSubmit}>
                <div class="registration-form">
                    <h1>Login</h1>
                    <hr />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <hr />

                    <button type="submit" class="registerbtn">Login</button>
                </div>
            </form>
        </div>
    );
}