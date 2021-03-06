import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ProfilePicRecipe from "./ProfilePicRecipe";
import { Image } from "cloudinary-react";
import UpdateButton from ".././resources/images/UpdateButton.png";
import ToggleButton from "./Toggle";
import {useParams} from "react-router";
import RecipePostApi from "../api/RecipePostApi";
import UserApi from "../api/UserApi";
import Updatebutton from "../resources/images/UpdateButton.png";
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
    const recipeLink = recipePost.body

    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>

                <div className="userNameSmall">{recipePost.userName}</div>
            </div>
            <div className="card" >
                <ToggleButton onSubmit={() => createFavoriteRecipe()}/></div>
            <div className="recipeImageBox">
                <Image className="recipeImageTwo" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
            </div>
            <div className="recipeTitleBoxLg">{recipePost.title}
            <Link to={`/review/${id}/update`}> <img src={Updatebutton} alt="Edit a recipe post" width="30px"/> </Link>
            <Link to={{pathname:`${recipeLink}`}}  target="_blank" > Recipe Link</Link>
            </div>

        </div>
    );
}