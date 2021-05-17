import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepics/profilepic200px-06.jpg";
import { Link } from "react-router-dom";
import MainIngredient from "./MainIngredient";
import ProfilePicRecipe from "./ProfilePicRecipe";
import { Image } from "cloudinary-react";

export default function RecipeCardMedium({ recipePost }) {

    return (
        <div className="recipeCardMedium">
            <div className="recipeImageBox">
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                {/* <img className="recipeImageMedium" src={recipeImageGeneral}/> */}
                <Image className="recipeImageTwo" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
                </Link>
            </div>
                <div className="recipeTitleBox">{recipePost.title}</div>
                <Link to={{pathname:`${recipePost.body}`}}  target="_blank" > Recipe Link</Link>
                <div className="card"></div>
            <div className="recipeTitleBox">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>
                <div className="userNameSmall">{recipePost.userName}</div>
            </div>
        </div>
    );
}