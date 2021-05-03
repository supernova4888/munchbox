import React, { useState } from "react";

export default function RegisterForm({ onSubmit }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
<div className="card">
    <div className="card-body">
        <h4 className="card-title">Sign up</h4>
        <div>
        <div className="form-group">
            <label>Name:</label>
            <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Choose a username"
            />
        </div>

        <div className="form-group">
            <label>Email:</label>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
            />
        </div>

        <div className="form-group">
            <label>Password:</label>
            <input
            type="password"
            placeholder="Choose a password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-group">
            <button
            className="buttonRegister"
            onClick={(e) => onSubmit({ name, email, password })}
            >
            Create account
            </button>
        </div>
        </div>
    </div>
    </div>
);
}
