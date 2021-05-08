import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";

export default function RecipeCardMedium({ recipePost }) {
    return (
        <div className="recipeCardMedium">
            <div className="recipeImageBox">
                {/* <img className="recipeImageMedium" src={recipeImageGeneral}/> */}
                <img className="recipeImageMedium" src={recipePost.imgURL}/>
            </div>
            <div className="recipeTitleBox">{recipePost.title}</div>
            <div className="recipePostedBy">
                <img className="userProfilePicSmall" src={sampleProfile}/>
                <div className="userNameSmall">{recipePost.userName}</div>
                <di>{recipePost.mainIngredient}</di>

            </div>
        </div>
    );
}