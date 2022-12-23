import React from "react";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="app">
            <form action="">
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