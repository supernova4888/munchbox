import React from 'react'
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import RecipePostApi from "../api/RecipePostApi";
import { Link, useParams } from "react-router-dom";


export default function UpdateSubmitForm({cloudURL}) {

    const [recipes, setRecipes] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredient, setIngredient] = useState ("");

    const {id} = useParams();

    const handleChange = e => {
        const {name, value} = e.target;
        setRecipes({...recipes,[name]: value})
        console.log(recipes);
    }

    const updateRecipeImg = (cloudURL) => {
        console.log(cloudURL);
    }

    // imageUpload generates a new cloudURL
    // could URL is here but i need to 'add' it to recipes


    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
                console.log(recipes);
        }, []);

    // api Update submission to the back end
    async function updateRecipe (event) {
        event.preventDefault();
        console.log("inside update recipe");
        // put request to the back end
        // maybe i only need the 'const recipes'
        //     const updatedRecipe = {
        //     title: title,
        //     body: link,
        //     imgURL: cloudURL,
        //     mainIngredient: ingredient
        // }
        try {
            const response = await RecipePostApi.updateRecipe(id, recipes);
            console.log(response.data);
            setRecipes(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h3>Edit recipe details </h3>

            <form className="recipeForm" onSubmit={updateRecipe}>

            <input className="form-control" value={recipes?.cloudURL} name="imgURL"/>

            <input className="form-control" value={recipes?.title} name="title" onChange={handleChange}/>

            {/* <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/> */}

            <input className="form-control" value={recipes?.body} name="body" onChange={handleChange} />
        
            {/* <input className="form-control" value={recipes?.mainIngredient} name="mainIngredient" onChange={handleChange}/> */}

            <h3>Edit recipe main ingredient:</h3>

                {/* <select id = "dropdown" value={recipes?.mainIngredient} onChange={(e) => setIngredient(e.target.value)}> */}
                <select id = "dropdown" value={recipes?.mainIngredient} name="mainIngredient" onChange={handleChange}>
                    <option>Select main ingredient:</option>
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
                <button className="buttonPost"type="submit"> Update Post</button>} modal nested>
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
