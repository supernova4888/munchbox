import React, { useState } from "react";

import logo from "../../resources/logo.png";

export default function LoginForm({ onSubmit }) {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
<div className="card">
    <div className="card-body">
        <img className="logoSmall" src={logo} /><h2>Login</h2>
        <div>
        <div className="form-group">
            <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
            <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-group-button">
            <button
            className="buttonRegister"
            onClick={() => onSubmit({ email, password })}
            >
            Login
            </button>

        </div>

        </div>
    </div>
    </div>
);
}
