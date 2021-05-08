import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import { Link } from "react-router-dom";
import MainIngredient from "./MainIngredient";

export default function RecipeCardMedium({ recipePost }) {
    return (
        <div className="recipeCardMedium">
            <div className="recipeImageBox">
                {/* <img className="recipeImageMedium" src={recipeImageGeneral}/> */}
                {/* // this is working. Check at home is img is fetched and formatted*/}
                <Image className="recipeImageMedium" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
            </div>
            <div className="recipeTitleBox">{recipePost.title}</div>
            <div className="recipePostedBy">
                <img className="userProfilePicSmall" src={sampleProfile}/>
                <div className="userNameSmall">{recipePost.userName}</div>

                
            </div>
        </div>
    );
}