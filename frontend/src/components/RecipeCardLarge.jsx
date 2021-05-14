import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import ProfilePicRecipe from "./ProfilePicRecipe";
import { Image } from "cloudinary-react";
import UpdateButton from ".././resources/images/UpdateButton.png";
import ToggleButton from "./Toggle";
export default function RecipeCardLarge({ recipePost }) {

    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>
                <div className="toggleButon"><ToggleButton/></div>
                <div className="userNameSmall">{recipePost.userName}</div>
            </div>
            <div className="recipeImageBox">
                <Image className="recipeImageLarge" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
            </div>
            <div className="recipeTitleBoxLg">{recipePost.title}</div>
            <img className="UpdateButton" width="40px" src={UpdateButton}/>
            <div className="recipeBody">
                 <a href={recipePost.body} target="_blank"> {recipePost.body}</a>
            </div>

        </div>
    );
}