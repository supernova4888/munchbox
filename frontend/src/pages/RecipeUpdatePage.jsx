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
    
    // TODO: fix icon linking from review to here

    // 1. retrieve the item to update - OK
    // 2. load the item:data in the form - OK
    // 3. allow user to input changes - OK
    // 4. save the changes in state
    // 5. send the item:data to back end with changes
    // 6. display the current updated item

    return (
        <div>
        <h3>You are in Recipe Update page</h3>

        <p>Edit image</p>

        <ImageUploader setImage={setImageURL} />

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