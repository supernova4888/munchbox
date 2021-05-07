import React, { useEffect, useState } from "react";
import {useParams} from "react-router";
import StarRating from "../../components/StarRating";
import CommentBar from "../../components/CommentBar";
import "../../styles/_review.css";
import RecipePostApi from "../../api/RecipePostApi";




export default function ReviewPage() {

    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();




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
                <div className="Comments"><h5>COMMENTS:</h5>
                    <CommentBar/>

                </div>
            </div>
        );
    }




