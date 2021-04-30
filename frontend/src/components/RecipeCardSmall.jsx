import logo from "../resources/logo.png";
import sampleRecipe from "../resources/recipe-01.jpg";

export default function RecipeCardSmall() {
    return (
        <div className="recipeCard">
            <div className="recipeImageBox">

                <img className="recipeImage" src={sampleRecipe}/>
            </div>
            <div className="recipeTitleBox">Title box recipe title, this title is a little bit longer than before</div>
        </div>
    );
}