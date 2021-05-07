import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import Follower from "./FollowerPage";
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';
import UserApi from "../api/UserApi";
import ProfilePicCurrent from "../components/ProfilePic";
import FoodIdCurrent from "../components/FoodIdCurrent";



// this page brings all the components for the user profile and renders it
// import FoodPref


// username
// email
// profile img (cat, dog...)
// userPref ("i eat all", "sthlm vegetarian"..)
// myrecipes
// following
//<FoodPref />

export default function Profile() {
    const [user, setUser] = useState([]);



    useEffect(() => {
       UserApi.getCurrentUser()
            .then(({data}) => setUser(data))
            .catch((err) => console.error(err));
    }, [setUser]);



    return (
        <div className="pageBody">
            <h1>ProfilePage</h1>
            <div className="card">
                <div className="card-body">
                    <div className="profileBox">
                        <ProfilePicCurrent />
                        <h2>{user.name}</h2>
                    </div>
                    
                    <div className="foodIdBox">
                        <h2>foodpref</h2>
                        <FoodIdCurrent />
                    </div>

                    <div className="profileInfo">
                        <p>Hello {user.name} !</p>
                        <p>Your pic ID is {user.profileId}</p>
                        <p>Your food ID is {user.foodId}</p>
                        <Link to="/profile/follower">Followers</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}