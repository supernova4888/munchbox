import React, { useState, useEffect } from "react";
import RecipePostApi from "../api/RecipePostApi";
import RecipeCardMedium from "../components/RecipeCardMedium";
import { Link } from "react-router-dom";

export default function SearchResults({ match }) {
  // State
  const [sortKey, setSortKey] = useState("mainIngredient");
  const [recipes, setRecipes] = useState([]);
  // Consts
  const query = match.params.query.toUpperCase();

  useEffect(() => {
    RecipePostApi.getAllRecipes()
      .then(({ data }) => setRecipes(data))
      .catch((err) => console.error(err));
  }, [setRecipes]);

  const filteredResults = recipes.filter((recipePost) =>
    recipePost.mainIngredient.toUpperCase().match(query)
  );
  const sortedResults = filteredResults.sort((a, b) =>
    a[sortKey] > b[sortKey] ? 1 : -1
  );

  // Components
  const RecipeCardsArray = sortedResults.map((recipePost) => (
    <RecipeCardMedium key={recipePost.id} recipePost={recipePost} />
  ));

  return (
      <div className="pageBody">
        <Link to="/home">
          <h1 className="iconLink">
            <i className="fas fa-arrow-circle-left"></i>
          </h1>
        </Link>

      {/* Search options */}

          <h1>Results for <u>{query.toLowerCase()}</u> recipes</h1>

        <button onClick={() => setSortKey("mainIngredient")}>
          MainIngredient
        </button>

      {/* Content */}
      <div className="recipeContainer">{RecipeCardsArray}</div>

      </div>
  );
}