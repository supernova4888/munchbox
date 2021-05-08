import React from 'react'
import { useState, useEffect } from "react";
import RecipePostApi from "../api/RecipePostApi";

export default function SubmitForm({cloudURL}) {

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredient, setIngredient] = useState ("");

    useEffect(() => {
        RecipePostApi.getAllRecipes()
        .then((response) => setRecipes(response.json))
        .catch((err) => console.log(err));
        }, []);

    async function createRecipe (event) {
        event.preventDefault();
        const newRecipe = {
            title: title,
            body: link,
            imgURL: cloudURL,
            mainIngredient: ingredient
        }
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
            <h3>Add recipe details </h3>

            <form className="recipeForm" onSubmit={createRecipe}>

                <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/>

                <input className="form-control" placeholder="Paste Link Here" type="text" onChange={(e) => setLink(e.target.value)}/>

                <h3>Select recipe main ingredient:</h3>

                <select id = "dropdown" onChange={(e) => setIngredient(e.target.value)}>
                    <option>Select main ingredient:</option>
                    <option value="Beef">Beef</option>
                    <option value="Veal">Veal</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb & Mutton">Lamb & Mutton</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>
                
                <button className="buttonPost"type="submit"><span className="vis">Post It</span><span className="invis">Done</span></button>
            </form>

        </div>
    )
}