import React, { useState, useEffect }  from "react";
import RecipePostApi from "../api/RecipePostApi";

import RecipeCardMedium from "../components/RecipeCardMedium";

export default function SpinnerPage() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const [recipes, setRecipes] = useState([]);
    const [random, setRandom] = useState(null);
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
        <div className="pageBody">
            <div className="card">
                <div className="card-body">
                    <h1>Wondering what you should cook for dinner?</h1>
                    <div className="spinner-button">
                        <button className="buttonLogin" onClick={handleClick}>spin</button>
                        <p>Recipe #{random}</p>
                        <button className="buttonLogin" onClick={showRandom}>show recipe</button>
                    </div>
                    <div className="spinner">
                        <RecipeCardMedium recipePost={recipe} />
                    </div>
                </div>
            </div>
        </div>
    )
}