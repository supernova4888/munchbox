import meat from "../resources/ingredients/meat-filled.png";
import chicken from "../resources/ingredients/chicken-filled.png";
import fish from "../resources/ingredients/fish-filled.png";
import egg from "../resources/ingredients/egg-filled.png";
import carrot from "../resources/ingredients/carrot-filled.png";

export default function MainIngredientPic({ recipePost }) {
    
    return (
        <div>
            {recipePost.mainIngredient === "Meat" && (
                <img className="ingredientPicSmall" src={meat} />
            )}
            {recipePost.mainIngredient === "Chicken" && (
                <img className="ingredientPicSmall" src={chicken} />
            )}
            {recipePost.mainIngredient === "Fish" && (
                <img className="ingredientPicSmall" src={fish} />
            )}
            {recipePost.mainIngredient === "Vegetarian" && (
                <img className="ingredientPicSmall" src={egg} />
            )}
            {recipePost.mainIngredient === "Vegan" && (
                <img className="ingredientPicSmall" src={carrot} />
            )}
        </div>
        
    );
}