import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import StarRating from "../../components/StarRating";
import RecipeCardLarge from "../../components/RecipeCardLarge";
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
            <div className="pageBody">
                <div className="card">
                    <RecipeCardLarge recipePost={recipes} />
                </div>

                <div className="card">

                    <form className="recipeForm" onSubmit={createReview}>
                        <StarRating onChangeRating ={changeRating} rating={rating} />
                        <textarea className="form-control" placeholder="Write your comment here" onChange={(e) => setBody(e.target.value)}/>
                        <button className="buttonRegister" type="submit">Save Review </button>
                    </form>
                </div>
            </div>
        );
    }




