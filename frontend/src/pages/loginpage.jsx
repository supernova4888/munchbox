// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
// Project files
import LoginForm from "./auth/LoginForm";
import Auth from "../services/Auth";

export default function LoginPage() {
    // Methods
    async function login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials. Check email and password and try again.");
        }
    }

    return (
        <div>
            <Link to="/mobile"><h1 className="iconLink"><i className="fas fa-arrow-circle-left"></i></h1></Link>
        <LoginForm onSubmit={login} />
        </div>
    )
}