import React, { useEffect, useState } from "react";

import RecipePostApi from "../../api/RecipePostApi";
import {useParams} from "react-router";




export default function  SavedRecipes() {
    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();
    const [rating, setRating] = useState(0);
    const [title, SetTitle] = useState("");

    async function getAllRecipe(recipePost) {
        try {
            const response = await RecipePostApi.getAllRecipes(recipePost);
            const recipe = response.data;
            const newRecipe = recipes.concat(recipe);

            setRecipes(newRecipe);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        RecipePostApi.getRecipeById(id)
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);


    return(
        <div>
            <div className="User-profile">


                <div> {recipes.title}</div>
                <div>{recipes.image}</div>
                <div className="recipeContainer">
                    <p>My Rating is {rating}</p>

                </div>

            </div>

    )
}