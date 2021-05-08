import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
<<<<<<< HEAD
import { Image } from "cloudinary-react";
=======
import { Link } from "react-router-dom";
import MainIngredient from "./MainIngredient";
>>>>>>> 251cce29a8ac83d303402139ee32dac538f8c4be

export default function RecipeCardMedium({ recipePost }) {
    return (
        <div className="recipeCardMedium">
            <div className="recipeImageBox">
<<<<<<< HEAD
                {/* <img className="recipeImageMedium" src={recipeImageGeneral}/> */}
                {/* // this is working. So I need to make sure that recipePost.imgURL constains the correct image cloud link */}
                <Image className="recipeImageMedium" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
=======
                <Link to={{pathname: `/review/${recipePost.id}`,}}>
                    <img className="recipeImageMedium" src={recipeImageGeneral}/>
                </Link>
>>>>>>> 251cce29a8ac83d303402139ee32dac538f8c4be
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