import React, { useState, useEffect } from "react";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipePostApi from "../api/RecipePostApi";

export default function MyPostedRecipes({match, user}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);

    /*const filteredResults = recipes.filter((recipePost) =>
        recipePost.username.match(user.name)
    );*/
    
    const RecipesArray = recipes.map((recipePost) => (

        <RecipeCardSmall key={recipePost.id} recipePost={recipePost}/>
    ));

    return (
        <div>

            <p>{user.name}'s recipes</p>
            {RecipesArray}
        </div>
    );
}