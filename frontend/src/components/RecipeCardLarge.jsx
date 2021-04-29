import logo from "../resources/logo.png";

export default function RecipeCardLarge() {
    return (
        <div className="recipeCardLarge">
            <div className="recipeImageBox">
                <img className="recipeImageLarge" src={logo}/>
            </div>
            <div className="recipeTitleBox">titlebox recipe title, this title is a little bit longer than before</div>
            <div className="recipePostedBy">
                <img className="userProfilePicSmall" src={logo}/>
                <div className="userNameSmall">username</div>

            </div>
        </div>
    );
}