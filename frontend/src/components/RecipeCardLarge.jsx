import React from "react";
import recipeImageGeneral from "../resources/recipe-03.jpg"
import sampleProfile from "../resources/profilepic200px-05.jpg";
import ProfilePicRecipe from "./ProfilePicRecipe";
import ToggleButton from "./Toggle";
import UpdateButton from ".././resources/images/UpdateButton.png";

export default function RecipeCardLarge({ recipePost }) {
    /*<ToggleButton
        value={ self.state.value || false }
        onToggle={(value) => {
            self.setState({
                value: !value,
            })
        }} />*/
console.log("recipe", recipePost)
    return (
        <div className="recipeCardLarge">
            <div className="userPosterContainer">
                <div className="postedBy">Posted by: </div>
                <ProfilePicRecipe recipePost={recipePost}/>
                <div className="toggleButon"><ToggleButton/></div>
                <div className="userNameSmall">{recipePost.userName}</div>
            </div>
            <div className="recipeImageBox">
                <img className="recipeImageLarge" src={recipeImageGeneral}/>
            </div>
            <div className="recipeTitleBoxLg">{recipePost.title}
                <img className="UpdateButton" src={UpdateButton}/></div>

            <div className="recipeBody">
                 <a href={recipePost.body} target="_blank"> {recipePost.body}</a>
            </div>

        </div>
    );
}