import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import Follower from "./FollowerPage";
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';
import UserApi from "../api/UserApi";
import ProfilePicCurrent from "../components/ProfilePic";
import FoodIdCurrent from "../components/FoodIdCurrent";
import MyPostedRecipes from "../components/MyPostedRecipes";
import ReviewCardSmall from "../components/ReviewCardSmall";
import followerImg from "../resources/profilepics/follower.png"
import following from "../resources/following.png";

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
                        <span>
                        <h2>{user.name}</h2> 
                        <h3>{user.email}</h3>
                        </span>
                    </div>

                    
                    <div className="foodIdBox">
                        <h2>{user.foodId}</h2>
                        <FoodIdCurrent />
                    </div>

                    <Link to="/profile/follower">
                        <div className="foodIdBox">
                            <h2>Following</h2>
                            <img className="profileFood" src={following} />
                        </div>
                    </Link>




                    <div className="profileInfo">
                        <p>Hello {user.name} !</p>
                        <p>Your food preference is {user.foodId}</p>
                        
                        
                        <h3>Here are your posted recipes (current:All recipes)</h3>
                        <MyPostedRecipes user={user}/>
                    </div>
                </div>
            </div>
            Here is example of a small review card:
            <ReviewCardSmall />
        </div>
    )
}