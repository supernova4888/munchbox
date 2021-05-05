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
        Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.secure_url);
        });
    };

    // check if fields are available in the BE.
    function createRecipe (event) {
        event.preventDefault();
        const newRecipe = {
            title: title,
            body: link,
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
    // get all recipes (BE) -> find newRecipe URL -> if true, then throw error.

    return (
        <div className="pageBody">
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>

            <div className="card">
            <form className="recipeForm" onSubmit={createRecipe}>

                <h3>Add recipe image</h3>
                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>


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