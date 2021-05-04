import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";

// link from the button to here

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

    function createRecipe () {
         fetch("https://localhost:8080/recipe", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(imageURL)
        })
        .then((response) => response.json())
        .then((imageURL) => setRecipes([...recipes, imageURL]))
        }
    }
    
    // Check that info was send correctly? no empty fields ?
    // id, imageString, title, recipe link, ingredient !=== nonull

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