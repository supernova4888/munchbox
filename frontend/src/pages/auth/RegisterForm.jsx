import React, { useState } from "react";
import logo from "../../resources/logo.png";

export default function RegisterForm({ onSubmit }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
<div className="card">
    <div className="card-body">
        <img className="logoSmall" src={logo} /><h2>Sign Up</h2>
        <div>
        <div className="form-group">
            <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Choose a username"
            />
        </div>

        <div className="form-group">
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
            />
        </div>

        <div className="form-group">
            <input
            type="password"
            placeholder="Choose a password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-group-button">
            <button
            className="buttonRegister"
            onClick={(e) => onSubmit({ name, email, password })}
            >
            Register
            </button>
        </div>
        </div>
    </div>
    </div>
);
}
