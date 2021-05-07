import React, { useState, useEffect }  from "react";
import RecipePostApi from "../api/RecipePostApi";

import RecipeCardMedium from "../components/RecipeCardMedium";

export default function SpinnerPage() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const [recipes, setRecipes] = useState([]);
    const [random, setRandom] = useState(2);
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));
    }, [setRecipes]);

    const RecipesArray = recipes.map((recipePost) => (
        <RecipeCardMedium key={recipePost.id} recipePost={recipePost}/>
    ));

    const max = RecipesArray.length

    const handleClick = () => setRandom(getRandomInt(max)+1);
    console.log("random" + random);

   /* useEffect(() => {
        RecipePostApi.getRecipeById(random)
            .then(({data}) => setRecipe(data))
            .catch((err) => console.error(err));
    }, [setRecipe]);*/

    async function showRandom (event) {
        event.preventDefault();
        console.log("inside showRandom function");
        try {
            const response = await RecipePostApi.getRecipeById(random);
            console.log("response.data" + response.data)
            setRecipe(response.data)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1>SpinnerPage</h1>
            <p>You are on the spinner page now.</p>
            <button className="buttonLogin" onClick={handleClick}>spin</button>
            <p>Random: {random}</p>
            <p>Max: {max}</p>
            {console.log(recipe)}
            <button className="buttonLogin" onClick={showRandom}>show recipe</button>
            <RecipeCardMedium recipePost={recipe} />
        </div>
    )
}