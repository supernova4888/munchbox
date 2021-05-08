import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import RecipeCardMedium from "../components/RecipeCardMedium";
import RecipePostApi from "../api/RecipePostApi";
import SubmitForm from "../components/SubmitForm";
import ReactImageUploadComponent from "react-images-upload";


export default function PostPage() {

// PostPage:
// 1. get img upload
// 2. get img cloud URL + upload img button
// 3. Call Form and pass cloud URL as props
// 4. inside Form you take cloud URL + user input and then submit button
// 5.   - still inside Form i post to the back end

const [imageURL, setImageURL] = useState("");
const [imageSelected, setImageSelected] = useState("");

const uploadImage = (e) => {
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
       //to fire postToCloude after the image has been uploaded/changed
    },[imageURL]);

    const postToCloud = async() => {
        try {
            if (imageURL !== null) {
              const response = await Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData);

// Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url)
//         });

              setImageURL(response.data.url);
              //await axios will send a response
              console.log("received response from cloud");
              console.log(response.data.url);
              console.log(imageURL);
              //simulate the event object so its doesn’t clash with handleChange
              // TODO: understand this one?
            //   uploadImg({
            //     target: {
            //       name: 'imageURL',
            //       value: response.data.url,
            //     },
            //   });
            }
          } catch (error) {
            console.log(error);
          }
    }

    // const [recipes, setRecipes] = useState([]);
    // const [title, setTitle] = useState("");
    // const [link, setLink] = useState("");
    // // TODO: add dropdown menu to choose pre-defined ingredient
    // const [ingredient, setIngredient] = useState ("");
    // const [imageURL, setImageURL] = useRecoilState(recipeImgState);

    // useEffect(() => {
    //     RecipePostApi.getAllRecipes()
    //     .then((response) => setRecipes(response.json))
    //     .catch((err) => console.log(err));
    //     }, []);

    

    // async function createRecipe (event) {
    //     event.preventDefault();
    //     console.log("inside createRecipe function");
    //     const newRecipe = {
    //         title: title,
    //         body: link,
    //         imgURL: imageURL,
    //         mainIngredient: ingredient
    //     }
    //     console.log(newRecipe);
    //     try {
    //         const response = await RecipePostApi.createRecipe(newRecipe);
    //         console.log(response.data);
    //         setRecipes(response.data);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
    
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

            {/* <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
            <button className="buttonUpload" onClick={uploadImage}> Upload Image</button> */}
            
            <ReactImageUploadComponent
            singleImage={true}
            onChange={imageURL}
            buttonText= 'Choose images'
            withLabel={false}
            withIcon={false}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            buttonClassName='' 
            />

            {/* Send imageURL as props */}
            <SubmitForm />

            </div>
        </div>
    );
}
