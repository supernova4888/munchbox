import React from "react";
import pic1 from "../resources/profilepics/profilepic200px-01.jpg";
import pic2 from "../resources/profilepics/profilepic200px-02.jpg";
import pic3 from "../resources/profilepics/profilepic200px-03.jpg";
import pic4 from "../resources/profilepics/profilepic200px-04.jpg";
import pic5 from "../resources/profilepics/profilepic200px-05.jpg";

export default function ProfilePicRecipe({recipePost}) {
    
    return (
        <div>
            {recipePost.profileId === "1" && (
                <img className="userProfilePicSmall" src={pic1} />
            )}
            {recipePost.profileId === "2" && (
                <img className="userProfilePicSmall" src={pic2} />
            )}
            {recipePost.profileId === "3" && (
                <img className="userProfilePicSmall" src={pic3} />
            )}
            {recipePost.profileId === "4" && (
                <img className="userProfilePicSmall" src={pic4} />
            )}
            {recipePost.profileId === "5" && (
                <img className="userProfilePicSmall" src={pic5} />
            )}
            
        </div>
        
    )
}