// NPM Packages
import React from "react";

// Project files
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
// add logo

export default function LoginPage() {
    // Methods
    async function login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials");
        }
    }

    async function register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Couldn't register check credentials and try again");
        }
    }

    return (
        <div className="wrapper">
            <div className="container">
                    <h1 className="card-title">Register Page</h1>
                    <p>Sign up or log in to get started.</p>
            </div>
            <div className="login">
            <LoginForm onSubmit={login}/>
            </div>
            <div className="register">
            <RegisterForm onSubmit={register}/>
            </div>
        </div>
    );
}
