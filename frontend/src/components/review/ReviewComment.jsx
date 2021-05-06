
// NPM Packages
//import React, { useEffect, useState } from "react";

// Project files
import ReviewApi from "../../api/CommentApi";
import Form from "../../pages/review/reviewCommentForm";

import ReviewCard from "../../pages/review/reviewCommentCard";
import RecipePostApi from "../../api/RecipePostApi";


/*
export default function ReviewPage() {
    // Local state
    const [posts, setPosts] = useState([]);
    const [review, setReview] = useState([]);
    // Methods
    async function createReview(RecipesData) {
        try {
            const response = await ReviewApi.createReview(RecipesData);
            const review = response.data;
            const newReview = posts.concat(review);

            setReview(newReview);
        } catch (e) {
            console.error(e);
        }
    }



    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then(({ data }) => setReview(data))
            .catch((err) => console.error(err));
    }, [setReview]);


    // Components
    const CardsArray = review.map((review) => (
        <ReviewCard key={review.id} comment={review} onSubmitClick={() => createReview(review)} />
    ));

    return (
        <div>
            <Form onSubmit={(ReviewData) => createReview(RecipesData)} />

            {CardsArray}
        </div>
    );
}
*/

