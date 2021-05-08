import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import StarRating from "../../components/StarRating";

import "../../styles/_review.css";
import RecipePostApi from "../../api/RecipePostApi";
import ReviewApi from "../../api/ReviewApi";




export default function ReviewPage() {

    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    const [UserName, SetUserName] = useState("");


    function changeRating(rating) {
        setRating(rating);
    }

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
                    <h4>Posted By: {recipes.userName}</h4>

                    <div> {recipes.title}</div>
                    <div>{recipes.body}</div>
                    <div className="recipeContainer">
                    <p>Your rating is {rating}</p>

                    </div>

                </div>



                <div>
                    <form className="recipeForm" onSubmit={createReview}>
                        <StarRating onChangeRating ={changeRating} rating={rating} />
                        <input className="form-control" placeholder="write your comment here" type="text" onChange={(e) => setBody(e.target.value)}/>
                        <button className="buttonRegister" type="submit">Save Review </button>
                    </form>
                </div>
            </div>
        );
    }




