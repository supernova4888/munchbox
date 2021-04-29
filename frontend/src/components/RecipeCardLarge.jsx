import logo from "../resources/logo.png";
import recipeImageGeneral from "../resources/recipe-03.jpg"

export default function RecipeCardLarge() {
    return (
        <div className="recipeCardLarge">
            <div className="recipeImageBox">
                <img className="recipeImageLarge" src={recipeImageGeneral}/>
            </div>
            <div className="recipeTitleBox">titlebox recipe title, this title is a little bit longer than before</div>
            <div className="recipePostedBy">
                <img className="userProfilePicSmall" src={logo}/>
                <div className="userNameSmall">username</div>

            </div>
        </div>
    );
}