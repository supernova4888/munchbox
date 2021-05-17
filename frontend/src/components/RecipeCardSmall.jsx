import logo from "../resources/logo.png";
import sampleRecipe from "../resources/recipe-01.jpg";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function RecipeCardSmall({ recipePost }) {
    return (
        <div className="card">
            <div className="recipe-body">
            <div className="recipeBox">
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                {/* <img className="recipeImage" src={sampleRecipe}/> */}
                <Image className="recipeImageMedium" cloudName="dt0zgbuyg" publicId={recipePost.imgURL} width="80px"/>
                </Link>
                
            </div>
            <h2>{recipePost.title}</h2>
            </div>
        </div>
    );
}