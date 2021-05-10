import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
export default function(){
    return(<div className="recipeImageBox">
        <img className="recipeImageLarge" src={recipeImageGeneral}/>
            <div className="recipeTitleBox">Chicken Pizza</div>
    </div>
    );
}