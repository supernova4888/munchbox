import meat from "../resources/ingredients/meat-filled.png";
import chicken from "../resources/ingredients/chicken-filled.png";
import fish from "../resources/ingredients/fish-filled.png";
import egg from "../resources/ingredients/egg-filled.png";
import carrot from "../resources/ingredients/carrot-filled.png";

export default function MainIngredientPic({ recipePost }) {
    
    return (
        <div>
            {recipePost.mainIngredient === "1" && (
                <img className="ingredientPicSmall" src={meat} />
            )}
            {recipePost.mainIngredient === "2" && (
                <img className="ingredientPicSmall" src={chicken} />
            )}
            {recipePost.mainIngredient === "3" && (
                <img className="ingredientPicSmall" src={fish} />
            )}
            {recipePost.mainIngredient === "4" && (
                <img className="ingredientPicSmall" src={egg} />
            )}
            {recipePost.mainIngredient === "5" && (
                <img className="ingredientPicSmall" src={carrot} />
            )}
        </div>
        
    );
}