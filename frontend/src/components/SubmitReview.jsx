import React from 'react'
import {useParams} from "react-router";
import StarRating from "../components/StarRating";
import ReviewApi from "../api/ReviewApi";
import { useEffect, useState } from "react";

export default function SubmitReview() {

const [reviews, setReviews] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const {id} = useParams();
    const [body, setBody] = useState("");
    const [rating, setRating] = useState(0);
    const [UserName, SetUserName] = useState("");

    function changeRating(rating) {
        setRating(rating);
    }

    useEffect(() => {
        ReviewApi.getAllReviews(id)
            .then(({data}) => setReviews(data))
            .catch((err) => console.error(err));
    }, [setReviews]);

    async function getAllReview(id) {
        try {
            const response = await ReviewApi.getAllReviews(id);
            const review = response.data;
            const newReview = reviews.concat(review);

            setReviews(newReview);
        } catch (e) {
            console.error(e);
        }
    }

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
            <div className="card">

                    <form className="recipeForm" onSubmit={createReview}>
                        <StarRating onChangeRating ={changeRating} rating={rating} />
                        <textarea className="form-control" placeholder="Write your comment here" onChange={(e) => setBody(e.target.value)}/>
                    <button className="buttonRegister" type="submit" > Save Review </button>
                    </form>
                </div>
        </div>
    )
}
