import logo from "../resources/logo.png";
import sampleRecipe from "../resources/recipe-01.jpg";
import { Link } from "react-router-dom";

export default function RecipeCardSmall({ recipePost }) {
    return (
        <div className="recipeCard">
            <div className="recipeImageBox">
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                <img className="recipeImage" src={sampleRecipe}/>
                </Link>
            </div>
            <div className="recipeTitleBox">{recipePost.title}</div>
        </div>
    );
}