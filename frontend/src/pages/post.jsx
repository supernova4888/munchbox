import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";

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

    function createRecipe (event) {
        event.preventDefault();
        console.log(imageURL);
        const newRecipe = {
            title: title,
            body: link,
            imgURL: imageURL,
            mainIngredient: ingredient
        }
        fetch("https://localhost:8080/post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
        .then((response) => response.json())
        
        .then((newRecipe) => setRecipes([...recipes, newRecipe]))
        }
    
    
    // Check that info was send correctly? no empty fields ?
    // id, imageString, title, recipe link, ingredient !=== nonull

    // check if the recipe URL already exists (?).
    // solution option 1: get all recipes from BE -> find newRecipe URL -> if true, then throw error.
    // solution option 2: transform the body field into unique in BE (how to transmit the error back to FE ?)


    return (
        <div>
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>
            <form onSubmit={createRecipe}>

                <h2>Add recipe image</h2>
                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button onClick={uploadImage}> Upload Image</button>

                <h2>Add recipe title:</h2>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                <h2>Add recipe link:</h2>
                <input type="text" onChange={(e) => setLink(e.target.value)}/>
                <h2>Select recipe main ingredient:</h2>
                <input type="text" onChange={(e) => setIngredient(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>

            {/* <Image 
            style={{width: 200}} cloudName="dt0zgbuyg" publicId="https://res.cloudinary.com/dt0zgbuyg/image/upload/v1620122494/munchbox/qislbl7qg1gsb7pfmqpd.png" /> */}
        </div>
    )
}