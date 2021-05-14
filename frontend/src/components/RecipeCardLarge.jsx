import React, {useEffect, useState} from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import ProfilePicRecipe from "./ProfilePicRecipe";
import { Image } from "cloudinary-react";
import UpdateButton from ".././resources/images/UpdateButton.png";
import ToggleButton from "./Toggle";
import {useParams} from "react-router";
import RecipePostApi from "../api/RecipePostApi";
export default function RecipeCardLarge({ recipePost }) {

    const[recipes,setRecipes]= useState([]);
    const [user, setUser] = useState();
    const {userId} = useParams();
    const {postId} = useParams();

    useEffect(() => {
        RecipePostApi.createFavoriteRecipes(userId,postId)
            .then(({data}) => setRecipes(data))
            .catch((err) => console.error(err));


    }, [setRecipes]);


    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>

                <div className="userNameSmall">{recipePost.userName}</div>

                <div className="toggleButon" ><ToggleButton/></div>
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