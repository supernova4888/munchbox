import React, { useState, useEffect } from "react";
import RecipeCardMedium from "../components/RecipeCardMedium";
import RecipePostApi from "../api/RecipePostApi";
import { Link, useHistory } from "react-router-dom";

export default function HomePage() {
        //Const
        const [query, setQuery] = useState("");
        const [recipes, setRecipes] = useState([]);      
        //property
        const history = useHistory();

        // Methods
        function onSearch(event) {
        event.preventDefault();

        history.push(`/results/${query}`);
        }
        useEffect(() => {
                RecipePostApi.getAllRecipes()
                    .then(({data}) => setRecipes(data))
                    .catch((err) => console.error(err));
        }, [setRecipes]);

        const RecipesArray = recipes.map((recipePost) => (

        <RecipeCardMedium key={recipePost.id} recipePost={recipePost}/>
        ));
        // functions that selects the recipe by user click

return (
    <div className="pageBody">
        <h1>HomePage</h1>
        <p>You are on the home page now. Below you'll see all recipes, with a sample image and sample user profile image.</p>

            <div className="card">
                <form onSubmit={onSearch}>

                    <p>Filter recipes by...</p>
                    <select onChange={(e) => setQuery(e.target.value)}>
                            <option>Choose...</option>
                            <option value="Red Meat">Red Meat</option>
                            <option value="White Meat">White Meat</option>
                            <option value="Fish">Fish</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                    </select>
                    <button className="buttonLogin" type="submit" value="Search">Filter</button>
                    {console.log("query :"+query)}

                </form>
            </div>


        <div className="recipeContainer">
                {RecipesArray}

        </div>
    </div>
)
}