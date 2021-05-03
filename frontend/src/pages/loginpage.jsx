import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "./auth/LoginForm";

export default function LoginPage() {
    return (
        <div>
            <Link to="/mobile"><h1><i className="fas fa-arrow-circle-left"></i></h1></Link>
        <LoginForm />
        </div>
    )
}