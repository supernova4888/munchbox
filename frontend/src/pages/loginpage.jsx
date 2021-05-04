// NPM Packages
import React from "react";
import { Link, useHistory } from "react-router-dom";

// Project files
import LoginForm from "./auth/LoginForm";
import Auth from "../services/Auth";

export default function LoginPage() {
    let history = useHistory();

    // Methods
    async function login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials. Check email and password and try again.");
        } else if (loginSuccess) {
            alert("Logged in!");
            history.push("/home");

        }
    }

    return (
        <div>
            <Link to="/">
                <h1 className="iconLink">
                    <i className="fas fa-arrow-circle-left"></i>
                </h1>
            </Link>
        <LoginForm onSubmit={login} />
        </div>
    )
}