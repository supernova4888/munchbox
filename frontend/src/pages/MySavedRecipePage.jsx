import {useEffect, useState} from "react";
import ReviewCardSmall from "../components/ReviewCardSmall";
import {useParams} from "react-router";
import RecipePostApi from "../api/RecipePostApi";

export default function MySavedRecipesPage(){
    const[recipes, setRecipes]= useState([]);
    const {id} = useParams();

    useEffect(() => {
        RecipePostApi.getFavoriteRecipes()
            .then(({data}) => {
                console.log("MySavedRecipePage.jsx useEffect() data", data);
                setRecipes(data)
            })
            .catch((err) => console.error(err));
        }, [setRecipes]
    );

    const RecipeArray = recipes.map((recipePost) => (
        <ReviewCardSmall key={recipePost.id} recipePost={recipePost} />
    ));

    return (
        <div>
            {RecipeArray}
        </div>
    );
}