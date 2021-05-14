import recipeImageGeneral from "../resources/recipe-03.jpg"

export default function ReviewCardSmall({recipePost}) {
    console.log("recipePost", recipePost);

    console.log("reviews",recipePost.reviews[0].rating  )

    const reviewRating = recipePost.reviews[0].rating



    return(
        <div className="recipeCard">
            <div className="reviewTitleBox">
                <div className="reviewSectionTitle">{recipePost.title}</div>
                <img src={recipePost.imgURL} alt="recipe image" className="reviewSection" width="60px"/>
                <div>Your Rating is :
                    {recipePost.reviews[0].rating} </div>

            </div>
        </div>
    );
}