import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import ProfilePicRecipe from "./ProfilePicRecipe";

export default function RecipeCardLarge({ recipePost }) {

    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>
                <div className="userNameSmall">{recipePost.userName}</div>
            </div>
            <div className="recipeImageBox">
                <img className="recipeImageLarge" src={recipeImageGeneral}/>
            </div>
            <div className="recipeTitleBoxLg">{recipePost.title}</div>
            <div className="recipeBody">
                 <a href={recipePost.body} target="_blank"> {recipePost.body}</a>
            </div>

        </div>
    );
}