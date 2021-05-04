import React, { useState, useEffect } from "react";

import StarRating from "../components/StarRating";
import logo from "../resources/logo.png";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipeCardLarge from "../components/RecipeCardLarge";
import Form from "../components/Form";
import { useState, useEffect } from "react";

export default function HomePage() {

return (
    <div>
        <h1>HomePage</h1> 
        <p>You are on the home page now. Below you'll see a sample recipes.</p>

        <Form />
        
        <div className="recipeContainer">
            {RecipesArray}
        </div>
    </div>
)
}