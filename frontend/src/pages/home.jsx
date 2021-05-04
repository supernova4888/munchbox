import React from "react";

import StarRating from "../components/StarRating";
import logo from "../resources/logo.png";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipeCardLarge from "../components/RecipeCardLarge";
import Form from "../components/Form";
import { useState, useEffect } from "react";

export default function HomePage() {

// take in recipe LINK and save to variable
// get the link from the user

const RAPID_API_URL = "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi";

const getRecipeLink = async (e) => {
    const recipeLink = e.target.elements.recipeLink.value;
    console.log(recipeLink);
}

useEffect (() => { 
    fetch(RAPID_API_URL, {
    "mode": "cors",
	"method": "POST",
	"headers": {
		"content-type": "text/plain",
		"x-rapidapi-key": "c561a99652msh2523f310101e8aap1b7f49jsn7aaa235534a7",
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	},
	"body": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
    })
    .then(response => {
	console.log(response);
    })
    .catch(err => {
	console.error(err);
    });
});

return (
    <div>
        <h1>HomePage</h1> 
        <p>You are on the home page now. Below you'll see a sample recipes.</p>

        <Form />
        
        <div className="recipeContainer">
            <RecipeCardLarge/>
            <RecipeCardLarge/>
            <RecipeCardLarge/>
            <RecipeCardLarge/>
            <RecipeCardSmall />
            <RecipeCardSmall />
            <RecipeCardSmall />
            <RecipeCardSmall />
        </div>
    </div>
)
}