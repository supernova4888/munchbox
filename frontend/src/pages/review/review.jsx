import React, { useEffect, useState } from "react";
import "../../styles/_review.css";
import ReviewComponent from "../../components/review/ReviewComponent";
import RecipePostApi from "../../api/RecipePostApi";



export default function ReviewPage(){

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [image, setImage] = useState("");

    // user select recipe. OnClick in the home page
    // from homepage -> props = recipe ID.
    // in this page. you get the props and place inside the useEffect as param
    // data (title, link, img). --> map the data into component.

    useEffect(() => {
        RecipePostApi.getAllRecipes()
            .then((response) => setRecipes(response.json))
            .catch((err) => console.log(err));
    }, []);

        return (
            <div className="Review-Class">
                <div className="UserPosted">
                    <h4>Posted By:</h4>
                    <div className="getRecipe"></div>
                </div>
                <div className="Review-subclass">
                    <ReviewComponent/>
                </div>
            </div>
        );
    }




