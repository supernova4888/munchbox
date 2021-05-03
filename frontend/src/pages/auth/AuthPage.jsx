// NPM Packages
import React from "react";

// Project files
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
// Images
import background from "../../resources/images/jenn-kosar-rzPVSqQjjqs-unsplash_gauss30.jpg";
import munchText from "../../resources/munchbox-text-transparent.png";
import munchLogo from "../../resources/logo_transparent_square.png";

export default function LoginPage() {
    // Methods
    async function login(loginData) {
        const loginSuccess = await Auth.login(loginData);
        if (!loginSuccess) {
            alert("Invalid credentials. Check email and password and try again.");
        }
    }

    async function register(registrationData) {
        const registerSuccess = await Auth.register(registrationData);
        if (!registerSuccess) {
            alert("Registration failed. Check credentials and try again.");
        }
    }

    return (
        <div>
            <div className="imageBlockContainer">
                <div className="imageBlock">
                    <h1 className="imageBlockTitle">
                    <img className="logo" src={munchLogo} />
                    <img className="logoText" src={munchText} /></h1>
                </div>
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
