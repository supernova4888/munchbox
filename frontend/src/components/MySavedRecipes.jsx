import React, {useEffect, useState} from "react";
import RecipePostApi from "../api/RecipePostApi";
import ReviewCardSmall from "./ReviewCardSmall";

export default function MySavedRecipes(){
    const[recipes,setRecipes]= useState([]);
    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);

    const RecipesArray = recipes.map((recipePost) => (

        <ReviewCardSmall key={recipePost.id} recipePost={recipePost}/>
    ));
    return (

        <div>{RecipesArray}</div>
    );

}