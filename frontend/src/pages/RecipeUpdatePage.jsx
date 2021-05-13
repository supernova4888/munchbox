import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import RecipePostApi from '../api/RecipePostApi';

export default function RecipeUpdatePage() {

const [recipes, setRecipes] = useState([]);
const [imageURL, setImageURL] = useState("");
const {id} = useParams();

useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
                console.log(recipes);
        }, []);
    
    // TODO: fix icon linking from review to here

    return (
        <div>
        <h3>You are in Recipe Update page</h3>

        <p>test</p>
        <img src={recipes?.imgURL} width="100px" />

        <p>Edit image</p>

        <ImageUploader setImage={setImageURL} />

         {imageURL !== "" &&
            // TODO: alignment - new css added 
                <img className="recipeImageTwo" src={imageURL} alt="uploadedImage" />
            }

        <UpdateSubmitForm cloudURL={imageURL}/>

        {/* <form className="updateRecipeForm" > */}

            {/* <input value={recipes?.body} name="body" onChange={handleChange} />
            <input value={recipes?.title} name="title" onChange={handleChange}/>
            <input value={recipes?.imgURL} name="imgURL" onChange={handleChange}/>


            {/* <Input label="First Name" register={register} required />

                <input value={recipes?.title} />

                <input {...register("recipes.title")} type="text" />
                <input {...register("recipes.body")} type="text" />
                <input {...register("recipes.imgURL")} type="text" />

                <button className="buttonPost"type="submit"> Update Post </button> */}
        {/* </form> */}

        </div>
    )
}