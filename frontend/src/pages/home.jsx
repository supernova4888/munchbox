import React, { useState, useEffect } from "react";

import RecipePostApi from "../api/RecipePostApi";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipeCardLarge from "../components/RecipeCardLarge";


export default function HomePage() {
    //Const
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);

    const RecipesArray = recipes.map((recipePost) => (
        <RecipeCardLarge key={recipePost.id} recipePost={recipePost}/>

));

console.log(recipes)

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