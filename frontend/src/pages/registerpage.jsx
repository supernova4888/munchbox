import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./auth/RegisterForm";

export default function RegisterPage() {
    return (
        <div>
            <Link to="/mobile">
            <h1 className="iconLink"><i className="fas fa-arrow-circle-left"></i></h1></Link>
        <RegisterForm />
        </div>
    )
}