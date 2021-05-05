import React, { useState, useEffect } from "react";
import RecipeCardMedium from "../components/RecipeCardMedium";
import RecipePostApi from "../api/RecipePostApi";
import Form from "../components/Form";
import StarRating from "../components/StarRating";
import logo from "../resources/logo.png";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipeCardLarge from "../components/RecipeCardLarge";
import { Link } from "react-router-dom";

export default function HomePage() {
        //Const
        const [recipes, setRecipes] = useState([]);
        useEffect(() => {
                RecipePostApi.getAllRecipes()
                    .then(({data}) => setRecipes(data))
                    .catch((err) => console.error(err));
        }, [setRecipes]);

        const RecipesArray = recipes.map((recipePost) => (
            <RecipeCardMedium key={recipePost.id} recipePost={recipePost}/>
        ));
return (
    <div>
        <h1>HomePage</h1>

        <p>You are on the home page now. Below you'll see a sample recipes.</p>

        <div className="recipeContainer">

            <Link className = "LinkToReviewPage"  to="/review">
                <RecipeCardLarge/>

            <RecipeCardLarge/>
            <RecipeCardLarge/>
            <RecipeCardLarge/>
            <RecipeCardSmall />
            <RecipeCardSmall />
            <RecipeCardSmall />
            <RecipeCardSmall />
            </Link>
        </div>
    </div>
)
}