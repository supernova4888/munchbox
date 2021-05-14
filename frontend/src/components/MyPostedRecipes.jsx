import React, { useState, useEffect } from "react";
import RecipeCardSmall from "../components/RecipeCardSmall";
import RecipePostApi from "../api/RecipePostApi";

export default function MyPostedRecipes({ user }) {
    const [recipes, setRecipes] = useState([]);
    console.log("user:", user)
    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => {
                const filteredResults = data.filter((recipePost) => {
                    console.log("filterA",recipePost.userName)
                    console.log("filterB",user)
                        recipePost.userName.match(user.name)
                }

                );
                console.log("hello inside useffect")
                console.log(user.name)
                console.log(filteredResults)
                setRecipes(filteredResults)
            })
            .catch((err) => console.error(err));
    }, [user, setRecipes]);


    
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