import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ReviewApi from"../../api/ReviewApi";
import StarRating from "../../components/StarRating";
import cookie_monster from "../../resources/images/cookie_monster.jpeg"
import RecipeCardLarge from "../../components/RecipeCardLarge";
import ReviewCardLarge from "../../components/ReviewCardLarge";
import recipeImageGeneral from "../../resources/recipe-03.jpg";
import CommentBar from "../../components/CommentBar";
import UpdateButton from "../../resources/images/UpdateButton.png"
import "../../styles/_review.css";

export default function ReviewPage(){

    // const recipeID = match.params.id;

    // bring info from back end


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
            <div>
                <div className="User-profile">
                    <h4>Posted By:</h4>

                    {/*<img className="UserImage" src={cookie_monster}/>*/}

                </div>
                <div className="User-image"><ReviewCardLarge/></div>
                <div className="review-ratings"><h5>MYRATING:</h5><StarRating/>
                    <img  className="svgIconExit" src={UpdateButton}/>
                </div>
                <div className="Comments"><h5>COMMENTS:</h5>
                    <CommentBar/>
                    <img  className="svgIconExit" src={UpdateButton}/>
                </div>
            </div>
        );
    }




