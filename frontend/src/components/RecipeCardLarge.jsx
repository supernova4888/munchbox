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

                <div className="toggleButon" >Fav it!<ToggleButton onSubmit={() => createFavoriteRecipe()}/></div>
            </div>
            <div className="recipeImageBox">
                <Image className="recipeImageLarge" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
            </div>
            <div className="recipeTitleBoxLg">{recipePost.title}
            <Link to={`/review/${id}/update`}> <img src={Updatebutton} alt="Edit a recipe post" width="40px"/> </Link>
        </div><div className="recipeBody">
                 <Link to={{pathname:`http://${recipeLink}`}}  target="_blank" > {recipeLink}</Link>
            </div>

        </div>
    );
}