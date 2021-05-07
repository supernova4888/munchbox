import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import { Link } from "react-router-dom";
import MainIngredient from "./MainIngredient";

export default function RecipeCardMedium({ recipePost }) {
    return (
        <div className="recipeCardMedium">
            <div className="recipeImageBox">
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                    <img className="recipeImageMedium" src={recipeImageGeneral}/>
                </Link>
            </div>
            <div className="recipeTitleBox">{recipePost.title}</div>
            <div className="recipePostedBy">
                <img className="userProfilePicSmall" src={sampleProfile}/>
                <div className="userNameSmall">{recipePost.userName}</div>
                
                <MainIngredient recipePost={recipePost} />
            </div>
        </div>
    );
}