import React from 'react'
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import RecipePostApi from "../api/RecipePostApi";
import { Link, useParams } from "react-router-dom";


export default function UpdateSubmitForm({cloudURL}) {

    const [recipe, setRecipe] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [ingredient, setIngredient] = useState ("");
    const {id} = useParams();

    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipe(data))
                .catch((err) => console.error(err));
                console.log(recipe);
        }, []);


    async function handleChange (event) {
        event.preventDefault();
        const {name, value} = event.target;
        setRecipe({...recipe,[name]: value})
        console.log(recipe);
    }

    // async issue - probably useEffect
    // useEffect or handleChange issue


    // api Update submission to the back end
    async function updateRecipe (event) {
        event.preventDefault();
        console.log("inside update recipe");
        // handleChangeImg(cloudURL)
        // put request to the back end
        // maybe i only need the 'const recipes'
        //     const updatedRecipee = {
        //     title: title,
        //     body: link,
        //     imgURL: imageURL,
        //     mainIngredient: ingredient
        // }
        try {
            console.log(recipe);
            const response = await RecipePostApi.updateRecipe(id, recipe);
            console.log(response.data);
            setRecipe(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h3>Edit recipe details </h3>

            <p>{imageURL}</p>

            <form className="recipeForm" onSubmit={updateRecipe}>

            <input className="form-control" value={recipe?.title} name="title" onChange={handleChange}/>

            <input className="form-control" value={recipe?.body} name="body" onChange={handleChange} />

            <h3>Edit recipe main ingredient:</h3>

                <select id = "dropdown" value={recipe?.mainIngredient} name="mainIngredient" onChange={handleChange}>
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
