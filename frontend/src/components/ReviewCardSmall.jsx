export default function ReviewCardSmall() {

    return(
        <div className="recipeCard">
            <div className="recipeImageBox">
                <img className="recipeImage" src={recipeImageGeneral}/>
            </div>
            <div className="reviewTitleBox">
                <div className="reviewSectionTitle">Chicken Pizza</div>
                <div className="reviewSection">Reviewed by Username</div>
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