import React, { useState } from "react";
import logo from "../../resources/logo.png";

export default function RegisterForm({ onSubmit }) {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [profileId, setProfileId] = useState("1");
const [foodId, setFoodId] = useState("Red Meat");

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
            Choose a profile picture: ({profileId})
            <div className="form-group">
                <button className="buttonProfilePic1" value="1" onClick={(e) => setProfileId(e.target.value)}></button>
                <button className="buttonProfilePic2" value="2" onClick={(e) => setProfileId(e.target.value)}></button>
                <button className="buttonProfilePic3" value="3" onClick={(e) => setProfileId(e.target.value)}></button>
                <button className="buttonProfilePic4" value="4" onClick={(e) => setProfileId(e.target.value)}></button>
                <button className="buttonProfilePic5" value="5" onClick={(e) => setProfileId(e.target.value)}></button>
            </div>
            Choose your food preference: ({foodId})
            <div className="form-group">
                <button className="buttonFoodPic1" value="Red Meat" onClick={(e) => setFoodId(e.target.value)}></button>
                <button className="buttonFoodPic2" value="White Meat" onClick={(e) => setFoodId(e.target.value)}></button>
                <button className="buttonFoodPic3" value="Fish" onClick={(e) => setFoodId(e.target.value)}></button>
                <button className="buttonFoodPic4" value="Vegetarian" onClick={(e) => setFoodId(e.target.value)}></button>
                <button className="buttonFoodPic5" value="Vegan" onClick={(e) => setFoodId(e.target.value)}></button>
        </div>
        <div className="form-group-button">
            <button
            className="buttonRegister"
            onClick={(e) => onSubmit({ name, email, password, profileId, foodId })}
            >
            Register
            </button>
        </div>
        </div>
    </div>
    </div>
);
}
