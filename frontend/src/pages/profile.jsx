import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import Follower from "./FollowerPage";
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';
import UserApi from "../api/UserApi";
import ProfilePicCurrent from "../components/ProfilePic";



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
        <div>
            <h1>ProfilePage</h1>
            <p>You are on the profile page now.</p>
            <Link to="/profile/follower">
            <h2>Followers</h2> 
            </Link>

            <p>Hello {user.name} !</p>
            <p>Your pic ID is {user.profileId}</p>

            <ProfilePicCurrent />


        </div>
    )
}
