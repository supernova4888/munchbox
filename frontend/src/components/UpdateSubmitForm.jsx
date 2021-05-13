import React from 'react'
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import RecipePostApi from "../api/RecipePostApi";
import { Link, useParams } from "react-router-dom";


export default function UpdateSubmitForm({preloadedValues}) {

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredient, setIngredient] = useState ("");

    const {id} = useParams();


    const handleChange = e => {
        const {name, value} = e.target;
        setRecipes({...recipes,[name]: value})
        console.log(recipes);
    }

    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
                console.log(recipes);
        }, []);

    // api Update submission to the back end
    const updateRecipe = (e) => {
        console.log("inside update recipe");
        // put request to the back end
    }

    return (
        <div>
            <h3>Edit recipe details </h3>

            <form className="recipeForm" onSubmit={updateRecipe}>

            <input className="form-control" value={recipes?.title} name="title" onChange={handleChange}/>
            <input className="form-control" value={recipes?.body} name="body" onChange={handleChange} />
        
            <input className="form-control" value={recipes?.mainIngredient} name="title" />

            <h3>Select recipe main ingredient:</h3>

                <select id = "dropdown" onChange={(e) => setIngredient(e.target.value)}>
                    <option>{recipes?.mainIngredient}</option>
                    <option value="Beef">Beef</option>
                    <option value="Veal">Veal</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb and Mutton">Lamb and Mutton</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>

                <Popup trigger={
                <button className="buttonPost"type="submit"> Post It</button>} modal nested>
                    {close => (
                        <div className="modal">
                        <button className="close" onClick={close}> &times;  
                        </button>
                        <div className="content">
                        {' '}
                        🎉 Recipe has been sucessfully updated! 🎉
                        </div>
                        </div>)}
                </Popup>
    
            </form>
            
        </div>
    )
}
