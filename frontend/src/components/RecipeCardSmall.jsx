import logo from "../resources/logo.png";
import sampleRecipe from "../resources/recipe-01.jpg";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

export default function RecipeCardSmall({ recipePost }) {
    return (
        <div className="card">
            <div className="card-body">
            <div className="profileBox">
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                {/* <img className="recipeImage" src={sampleRecipe}/> */}
                <Image className="reviewSection" cloudName="dt0zgbuyg" publicId={recipePost.imgURL} width="60px"/>
                </Link>
                <h2>{recipePost.title}</h2>
            </div>
            </div>
        </div>
    );
}