import React, { useEffect, useState } from "react";



import StarRating from "../../components/review/StarRating";
import cookie_monster from "../../resources/images/cookie_monster.jpeg"
import RecipeCardLarge from "../../components/RecipeCardLarge";
import "../../styles/_review.css";
import ReviewComponent from "../../components/review/ReviewComponent";

export default function ReviewPage(){



    //Local state
    /*const [reviews,setReviews]= useState([]);
    //Methods
    async function createReview(postData) {
        try {
            const response = await ReviewApi.createReview(postData);
            const reviews = response.data;
            const newReview = posts.concat(reviews);

            setReviews(newReview);
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
        }*/

        return (
            <div className="Review-Class">


                <div className="Review-subclass">
                    <ReviewComponent/>
                </div>
            </div>
        );
    }




