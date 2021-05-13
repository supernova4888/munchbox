import recipeImageGeneral from "../resources/recipe-03.jpg"

export default function ReviewCardSmall({recipePost}) {

    return(
        <div className="recipeCard">
            <div className="recipeImageBox">
                <img className="recipeImage" src={recipeImageGeneral}/>
            </div>
            <div className="reviewTitleBox">
                <div className="reviewSectionTitle">{recipePost.imgURL}</div>
                <div className="reviewSection">{recipePost.title}</div>
                <div className="reviewSectionStars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>

        </div>
    );
}