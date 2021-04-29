import logo from "../resources/logo.png";

export default function RecipeCardSmall() {
    return (
        <div className="recipeCard">
            <div className="recipeImageBox">

                <img className="recipeImage" src={logo}/>
            </div>
            <div className="recipeTitleBox">titlebox recipe title, this title is a little bit longer than before</div>
        </div>
    );
}