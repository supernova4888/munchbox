import React, { useState, useEffect } from "react";
import RecipeCardMedium from "../components/RecipeCardMedium";
import RecipePostApi from "../api/RecipePostApi";
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

        <Link className = "LinkToReviewPage"  to={{
                pathname: `/review
                /${recipePost.id}`,
        }}><RecipeCardMedium key={recipePost.id} recipePost={recipePost}/></Link>
        ));
        // functions that selects the recipe by user click

return (
    <div className="pageBody">
        <h1>HomePage</h1>
        <p>You are on the home page now. Below you'll see all recipes, with a sample image and sample user profile image.</p>

        <div className="recipeContainer">
                {RecipesArray}

        </div>
    </div>
)
}