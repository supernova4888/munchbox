import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import StarRating from "../../components/StarRating";
import CommentBar from "../../components/CommentBar";
import "../../styles/_review.css";
import RecipePostApi from "../../api/RecipePostApi";
import ReviewApi from "../../api/ReviewApi";




export default function ReviewPage() {

    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("");
    const [UserName, SetUserName] = useState("");




    async function getAllRecipes(recipePost) {
        try {
            const response = await RecipePostApi.getAllRecipes(recipePost);
            const recipe = response.data;
            const newRecipe = recipes.concat(recipe);

            setRecipes(newRecipe);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
        }, [setRecipes]);
//Function to save a review to backend
    async function createReview (event) {
        event.preventDefault();
        console.log("inside createReview function");
        const newReview = {

            body: body,
            rating :rating,
userName:UserName,
        }
        try {
            const response = await ReviewApi.createReview(id,newReview);
            console.log(response.data);
            setRecipes(response.data);
        } catch (e) {
            console.error(e);
        }
    }



        return (
            <div>
                <div className="User-profile">
                    <h4>Posted By:{recipes.userName}</h4>

                    <div> {recipes.title}</div>
                    <div>{recipes.body}</div>
                    <div className="recipeContainer">
                    </div>

                </div>
                <div className="review-ratings"><h5>MYRATING:</h5><StarRating/>
                </div>


                <div>
                    <form className="recipeForm" onSubmit={createReview}>

                        <input className="form-control" placeholder="write your comment here" type="text" onChange={(e) => setBody(e.target.value)}/>
                        <button className="buttonRegister" type="submit">Save Review </button>
                    </form>
                </div>
            </div>
        );
    }




