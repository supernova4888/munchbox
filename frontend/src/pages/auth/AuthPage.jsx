// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
// Images
import munchText from "../../resources/munchbox-text-transparent.png";
import munchLogo from "../../resources/logo_transparent_square.png";

//referred to as Welcome page in browser router
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
            <div className="imageBlockContainer">
            <Link to="/home">...or continue as a guest</Link>
            </div>
        </div>
    );
}
