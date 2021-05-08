import React from 'react'
import { useState, useEffect } from "react";

export default function SubmitForm({cloudImgURL}) {

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    // TODO: add dropdown menu to choose pre-defined ingredient
    const [ingredient, setIngredient] = useState ("");

    useEffect(() => {
        RecipePostApi.getAllRecipes()
        .then((response) => setRecipes(response.json))
        .catch((err) => console.log(err));
        }, []);

    async function createRecipe (event, cloudImgURL) {
        event.preventDefault();
        console.log("inside createRecipe function");
        const newRecipe = {
            title: title,
            body: link,
            imgURL: {cloudImgURL},
            mainIngredient: ingredient
        }
        console.log(newRecipe);
        try {
            const response = await RecipePostApi.createRecipe(newRecipe);
            console.log(response.data);
            setRecipes(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h3>Add recipe details</h3>

            <form className="recipeForm" onSubmit={createRecipe}>

                <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/>

                <input className="form-control" placeholder="Paste Link Here" type="text" onChange={(e) => setLink(e.target.value)}/>

                <h3>Select recipe main ingredient:</h3>
                <input className="form-control" type="text" onChange={(e) => setIngredient(e.target.value)}/>

                <button className="buttonRegister" type="submit">Submit</button>

            </form>
        </div>
    )
}
