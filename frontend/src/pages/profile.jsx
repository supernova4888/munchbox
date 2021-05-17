import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';

import UserFollower from "./UserFollowerPage";
import UserApi from "../api/UserApi";
import ProfilePicCurrent from "../components/ProfilePic";
import FoodIdCurrent from "../components/FoodIdCurrent";
import MyPostedRecipes from "../components/MyPostedRecipes";
import ReviewCardSmall from "../components/ReviewCardSmall";
import followerImg from "../resources/profilepics/follower.png"
import following from "../resources/group-white.png";
import recipe from "../resources/profilepics/cooking.png"

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
    const [user, setUser] = useState([]);
    const [status, setStatus] = useState(0) // 0 is loading, 1 is loaded, 2 error


    useEffect(() => {
    UserApi.getCurrentUser()
            .then(({data}) => {
                setUser(data)
                setStatus(1)
            })
            .catch((err) => console.error(err));
    }, [setStatus,setUser]);



    return (
        <div className="pageBody">
            <h1>About Me</h1>
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
                        <FoodIdCurrent />
                        <h2>You Eat...</h2>
                    </div>

                    <Link to="/profile/follower">
                        <div className="foodIdBox">
                        <img className="profileFollow" src={following} />
                            <h2>You Follow...</h2>
                        </div>
                    </Link>
                    <br/>

                    <Link to="/myRecipes">
                        <div className="foodIdBox">
                        <img className="profileFollow" src={recipe} />
                            <h2>You Posted...</h2>
                        </div>
                    </Link>
{/* 
                    <div className="profileInfo">
                        <p>Hello {user.name} !</p>
                        {status === 0 && <p>Loading recipes...</p>}
                        {status === 1 && <MyPostedRecipes user={user}/>} */}
                        {/* ERROR here pls */}
{/*                     </div> */}
                </div>
            </div>

        {/* <ReviewCardSmall />*/}
        </div>
    )
}