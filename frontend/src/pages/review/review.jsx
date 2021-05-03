import React, { useEffect, useState } from "react";


import ReviewApi from"../../api/ReviewApi";
import RecipeCardLarge from "../components/RecipeCardLarge";
import StarRating from "../../components/StarRating";

export default function ReviewPage()

{ //Local state
    const [posts,setposts]= useState([]);
    //Methods
    async function createReview(postData) {
        try {
            const response = await ReviewApi.createReview(postData);
            const reviews = response.data;
            const newReview = posts.concat(reviews);

            setReview(newReview);
        } catch (e) {
            console.error(e);
        }

        async function deleteReview(reviews) {
            try {
                await ReviewApi.deleteReview(posts.id);
                const newReviews = reviews.filter((p) => p.id !== post.id);

                setReviews(newReviews);
            } catch (e) {
                console.error(e);
            }
        }

        return (
            <div>
                <h6>Posted By</h6>
                <RecipeCardLarge/>
                <h6>Chicken Pizza</h6>
                <div className="review-ratings"><h5>MYRATING</h5>
                    <StarRating/>
                </div>
                <div>
                    <h5>COMMENTS:</h5>

                </div>
            </div>
        );
    }}




