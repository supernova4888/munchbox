import React, { useState, useEffect } from "react";
import UserApi from "../api/UserApi";
import pluspurple from "../resources/mobile_navbar/pluspurple.png";
import { Link } from "react-router-dom";

export default function FollowerPage() {
const [users, setUsers] = useState([]);
const[follower, setFollower] = useState([false]);

useEffect(() => {
    UserApi.getAllUsers()
    .then(({data}) => setUsers(data))
    .catch((err) => console.error(err));
}, [setUsers]);

const handleClickCreate = () => {
        setFollower(!follower)
        setUsers(false)  
    }
    

return (
    <div>
        <h1 className= "followers--heading">Followers</h1>
        <p className="followers--title">Suggestions to Follow</p>


        <div className="container d-flex justify-content-around mb-4">
            <button
                    className="btn btn-sm btn-info"
                    onClick={handleClickCreate} aria-pressed="true">
                <img className="pluspurple" src={pluspurple} />
                </button>
        </div>
        </div>
);
}