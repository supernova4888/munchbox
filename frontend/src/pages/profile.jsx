import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';
import UserFollower from "./UserFollowerPage";



// this page brings all the compoents for the user profile and renders it
// import FoodPref


// username
// email
// profile img (cat, dog...)
// userPref ("i eat all", "sthlm vegetarian"..)
// myrecipes
// following
//<FoodPref />

export default function Profile() {
    return (
        <div>
            <h1>ProfilePage</h1>
            <p>You are on the profile page now.</p>
            <Link to="/profile/follower">
            <h2>Suggestions to follow</h2> 
            </Link> 
            <Link to="/profile/youfollow">
            <h2>Followers</h2> 
            </Link> 
        </div>
    )
}
