import React from "react";

import StarRating from "../components/StarRating";
import logo from "../resources/logo.png";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipeCardLarge from "../components/RecipeCardLarge";
import { Link } from "react-router-dom";

export default function HomePage() {
return (
    <div>
        <h1>HomePage</h1>
        <Link className = "LinkToReviewPage"  to="/review">
            Click here to review Your recipe
        </Link>
        <p>You are on the home page now. Below you'll see a sample recipes.</p>

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