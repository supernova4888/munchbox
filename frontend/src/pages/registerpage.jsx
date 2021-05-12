// NPM Packages
import React from "react";
import { Link, useHistory } from "react-router-dom";
// Project files
import RegisterForm from "./auth/RegisterForm";
import Auth from "../services/Auth";
import AboutInfo from "../components/AboutInfo";


export default function RegisterPage() {
    let history = useHistory();

    // Methods
    async function register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Registration failed. Check credentials and try again.");
        } else if (registerSuccess) {
            alert("Account created!")
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
            <AboutInfo/>
        <RegisterForm onSubmit={register} />
        </div>
    );
}