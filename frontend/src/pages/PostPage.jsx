import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import SubmitForm from "../components/SubmitForm";


export default function PostPage() {

const [imageURL, setImageURL] = useState("");
const [imageSelected, setImageSelected] = useState("");

const uploadImage = (e) => {
        // e.preventDefault();
        // constructs the formData
        // const imageFile = e[0];
        const formData = new FormData()
        console.log(imageSelected);
        formData.append("file", imageSelected)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        
        // TODO: check if imgSelected is correct

        // post request
        console.log("before setImageURL", formData);
        setImageURL(formData);
        console.log("after imgURL");
    };

    useEffect(()=> {
          postToCloud();
       //to fire postToCloude after the image has been uploaded uploadimg()
    },[imageURL]);

    const postToCloud = async() => {
        try {
            if (imageURL !== null) {
                const response = await Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", imageURL);

// Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url) });

                setImageURL(response.data.url);
                //await axios will send a response
                console.log("received response from cloud");
                console.log(response.data.url);
                console.log(imageURL);
            }
        } catch (error) {
            console.log(error);
        }
    }

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

            <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
            <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>
        

            {/* Sending imageURL as props to RecipeCardMedium*/}
            <SubmitForm cloudURL={imageURL}/>

            </div>
        </div>
    );
}
