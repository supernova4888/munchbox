import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import RecipeCardMedium from "../components/RecipeCardMedium";
import RecipePostApi from "../api/RecipePostApi";

// In the UI, add a button or the menu nav so user can return. Copy from loginPage

export default function PostPage() {
    const [recipes, setRecipes] = useState([]);
    const [imageSelected, setImageSelected] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    // TODO: add dropdown menu to choose pre-defined ingredient
    const [ingredient, setIngredient] = useState ("");

    const uploadImage = () => {
        // constructs the formData
        const formData = new FormData()
        formData.append("file", imageSelected)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        // post request
        Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url)
        });
    };

    //setImageURL(response.data.secure_url)
    // check if fields are available in the BE.
    // 1. check the api code 
    // 2. run by postman to figure out what is wrong.

    // to be used when we wanna update our people list
    useEffect(() => {
        RecipePostApi.getAllRecipes()
        .then((response) => setRecipes(response.json))
        .catch((err) => console.log(err));
        }, []);


    // async function createRecipe(event){
    //     event.preventDefault();
    //     console.log(title);
    //     console.log(link);
    //     console.log(ingredient);
    // }
    

    async function createRecipe (event) {
        event.preventDefault();
        console.log("inside createRecipe function");
        const newRecipe = {
            title: title,
            body: link,
            imgURL: imageURL,
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
    
    // const recipeList = recipes.map((recipe) => {
    //     return <RecipeCardMedium key= {recipe.id} recipe ={recipe} />
    // })
    
    
    // Check that info was send correctly? no empty fields ?
    // id, imageString, title, recipe link, ingredient !=== nonull

    // check if the recipe URL already exists (?).
    // solution option 1: get all recipes from BE -> find newRecipe URL -> if true, then throw error.
    // solution option 2: transform the body field into unique in BE (how to transmit the error back to FE ?)

     // <ul>{recipeList}</ul> 


    return (
        <div className="pageBody">
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>

            <div className="card">
            <form className="recipeForm" onSubmit={createRecipe}>

                <h3>Add recipe image</h3>
                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>

                <h2>Add recipe title:</h2>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <h2>Add recipe link:</h2>
                <input type="text" onChange={(e) => setLink(e.target.value)}/>
                <h2>Select recipe main ingredient:</h2>
                <input type="text" onChange={(e) => setIngredient(e.target.value)}/>
                <button type="submit">Submit</button>

            </form>

            {/* <Image 


                <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/>

                <input className="form-control" placeholder="Paste Link Here" type="text" onChange={(e) => setLink(e.target.value)}/>
                <h3>Select recipe main ingredient:</h3>
                <input className="form-control" type="text" onChange={(e) => setIngredient(e.target.value)}/>
                <button className="buttonRegister" type="submit">Submit</button>
            </form>
            </div>
            {/* For getting the image in the Recipe Card <Image 
            style={{width: 200}} cloudName="dt0zgbuyg" publicId="https://res.cloudinary.com/dt0zgbuyg/image/upload/v1620122494/munchbox/qislbl7qg1gsb7pfmqpd.png" /> */}
        </div>
    )
}