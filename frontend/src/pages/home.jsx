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
        <h1>Filter by Ingredient</h1>
        <form onSubmit={onSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
        <div className="recipeContainer">
                {RecipesArray}

        </div>
    </div>
)
}