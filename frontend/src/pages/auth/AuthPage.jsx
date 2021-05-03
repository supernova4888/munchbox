// NPM Packages
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Project files
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
// Images
import munchText from "../../resources/munchbox-text-transparent.png";
import munchLogo from "../../resources/logo_transparent_square.png";

export default function AuthPage() {


    return (
        <div>
            <div className="imageBlockContainer">
                <div className="imageBlock">
                    <h1 className="imageBlockTitle">
                    <img className="logo" src={munchLogo} />
                    <img className="logoText" src={munchText} /></h1>
                </div>
            </div>
            <div className="imageBlockContainer">
                <Link to="/login">
                    <button className="buttonLogin">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="buttonRegister">Register</button>
                </Link>
            </div>
        </div>
    );
}
