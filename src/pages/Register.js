import React from "react";
import { Link, redirect } from 'react-router-dom';
import axios from "axios";

export default function Register() {
    return (
        <div className="app">
            <form action="http://localhost:80/register" method="POST">
                <div class="registration-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="username"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" id="username" required />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    <hr />

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>
                </div>

                <div class="container signin">
                    <p>Already have an account? <Link to="/dang-nhap">Sign in</Link>.</p>
                </div>
            </form>
        </div>
    );
}