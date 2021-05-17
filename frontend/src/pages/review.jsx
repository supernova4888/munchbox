import { useEffect, useState } from "react";
import {useParams} from "react-router";
import StarRating from "../components/StarRating";
import RecipeCardLarge from "../components/RecipeCardLarge";
import "../styles/_review.css";
import RecipePostApi from "../api/RecipePostApi";
import ReviewApi from "../api/ReviewApi";
import Updatebutton from "../resources/images/UpdateButton.png";
import SubmitReview from "../components/SubmitReview";

export default function ReviewPage() {

    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();

    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
        }, [setRecipes]);


        return (
            <div className="pageBody">
                <div className="card">
                    <RecipeCardLarge recipePost={recipes} />
                </div>
                    <SubmitReview />
            </div>
        );
    }



