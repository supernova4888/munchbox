import recipeImageGeneral from "../resources/recipe-03.jpg"

export default function ReviewCardSmall({recipePost}) {
    console.log("recipePost", recipePost);

    console.log("reviews",recipePost.reviews[0].rating  )

    const reviewRating = recipePost.reviews[0].rating



    return(
        <div className="card">
            <div className="card-body">
            <div className="profileBox">
                <img src={recipePost.imgURL} alt="recipe image" className="reviewSection" width="60px"/>
                <span>
                <h2>{recipePost.title}</h2>
                <h3>Your Rating is : {recipePost.reviews[0].rating} </h3>
                    </span>
            </div>
            </div>
            </div>
    );
}