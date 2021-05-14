import React, {useEffect, useState} from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import ProfilePicRecipe from "./ProfilePicRecipe";
import { Image } from "cloudinary-react";
import UpdateButton from ".././resources/images/UpdateButton.png";
import ToggleButton from "./Toggle";
import {useParams} from "react-router";
import RecipePostApi from "../api/RecipePostApi";
import UserApi from "../api/UserApi";
export default function RecipeCardLarge({ recipePost }) {

    const[userId,setUserId]= useState({});
    const[postId,setPostId]= useState({});
    const[favorite,setFavorite]= useState([]);
    const {id} = useParams();

    useEffect(() => {
        UserApi.getCurrentUser()
            .then(({ data }) => {
                setUserId(data.id);

                console.log("user:" + data.id)
            })
            .catch((err) => console.error(err));
    }, [setUserId]);

    useEffect(() => {
        RecipePostApi.getRecipeById(id)
            .then(({ data }) => {
                setPostId(data.id);
                console.log("recipe:" + data.id)
            })
            .catch((err) => console.error(err));
    }, [setPostId]);
    async function createFavoriteRecipe() {
        console.log("Favorite created")
        try {
            const response = await RecipePostApi.createFavoriteRecipes(userId,postId);
            console.log("Favorite created succ")
            const favoriteRecipe = response.data;
            const newFavoriteRecipe = favorite.concat(favoriteRecipe);
            setFavorite(newFavoriteRecipe);
            console.log("favoriteRecipe")
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>

                <div className="userNameSmall">{recipePost.userName}</div>

                <div className="toggleButon" ><ToggleButton onSubmit={() => createFavoriteRecipe()}/></div>
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