import React from 'react'
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
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

    // async issue - probably useEffect
    // useEffect or handleChange issue

    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
                console.log(recipes);
        }, []);

    // const handleChangeImg = cloudURL => {
    //     const {name, value} = cloudURL;
    //     setRecipes({...recipes,[imageURL]: cloudURL})
    //     console.log(recipes);
    // }

    // retrieve first from BE, it has the imgURL already


    // api Update submission to the back end
    async function updateRecipe (event) {
        // event.preventDefault();
        console.log("inside update recipe");
        // handleChangeImg(cloudURL)
        // put request to the back end
        // maybe i only need the 'const recipes'
            const updatedRecipee = {
            title: title,
            body: link,
            imgURL: imageURL,
            mainIngredient: ingredient
        }
        try {
            console.log(recipes);
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

            <p>{imageURL}</p>

            <form className="recipeForm" onSubmit={updateRecipe}>

            <input className="form-control" value={recipes?.title} name="title" onChange={handleChange}/>

            {/* <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/> */}

            <input className="form-control" value={recipes?.body} name="body" onChange={handleChange} />

            <h3>Edit recipe main ingredient:</h3>

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
