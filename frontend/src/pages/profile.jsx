import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FoodPref from '../components/FoodPref'
import Follower from "./FollowerPage";
import { Link } from "react-router-dom";
import FollowerPage from './FollowerPage';
import UserApi from "../api/UserApi";



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

    /*async function showUser (event) {
        event.preventDefault();
        console.log("inside showRandom function");
        try {
            const response = await UserApi.getCurrentUser();
            console.log("response.data" + response.data)
            setUser(response.data)
        } catch (e) {
            console.error(e);
        }
    }
    console.log(user)*/

    useEffect(() => {
       UserApi.getCurrentUser()
            .then(({data}) => setUser(data))
            .catch((err) => console.error(err));
    }, [setUser]);

    /*const RecipesArray = recipes.map((recipePost) => (

        <RecipeCardMedium key={recipePost.id} recipePost={recipePost}/>
    ));*/


    return (
        <div>
            <h1>ProfilePage</h1>
            <p>You are on the profile page now.</p>
            <Link to="/profile/follower">
            <h2>Followers</h2> 
            </Link>

            <p>Hello {user.name} !</p>
        </div>
    )
}
