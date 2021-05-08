import React, { useState, useEffect } from "react";
import RecipePostApi from "../api/RecipePostApi";
import RecipeCardMedium from "../components/RecipeCardMedium";

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
    <div id="results" className="container">
      {/* Search options */}
      <section>
        Filter results by:
        <button onClick={() => setSortKey("mainIngredient")}>
          MainIngredient
        </button>
      </section>

      <hr />
      {/* Content */}
      <section className="grid">{RecipeCardsArray}</section>
    </div>
  );
}