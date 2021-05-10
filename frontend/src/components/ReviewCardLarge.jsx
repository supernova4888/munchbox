import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import { Image } from "cloudinary-react";

export default function(){
    return(<div className="recipeImageBox">
        <Image className="recipeImageLarge" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/>
            <div className="recipeTitleBox">Chicken Pizza</div>
    </div>
    );
}