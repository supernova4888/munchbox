/*

import React, { useEffect, useState } from "react";
import RecipePostApi from "../../api/RecipePostApi";
import UserCard from "../../components/UserCard";
import UserApi from "../../api/UserApi";
import RecipeCardLarge from "../../components/RecipeCardLarge";


export default function SavedRecipes(){
    nst [recipe, setRecipe] = useState([]);


    const RecipeArray = recipe.map((user) => (
        <RecipeCardLarge key={recipe.id} user={user}/>
    ));

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipe(data))
            .catch((err) => console.error(err));
    }, [setRecipe]);


    return(co
        <div className="savedRecipes">

                {RecipeArray}
            </div>
        </div>


    );
}*/
