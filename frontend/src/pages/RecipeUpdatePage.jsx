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

    //  body: recipes.,
    //         imgURL: cloudURL,
    //         mainIngredient: ingredien

    // const {register, handleSubmit} = useForm({
    //     defaultValues: {title: recipes?.title}
    // });

    // const onSubmit = (recipes) => {
    //     alert(JSON.stringify(recipes));
    // };

    // const handleChange = e => {
    //     const {name, value} = e.target;
    //     setRecipes({...recipes,[name]: value})
    // }

    // useEffect(() => {
    //         RecipePostApi.getRecipeById(id)
    //             .then(({data}) => setRecipes(data))
    //             .catch((err) => console.error(err));
    //             console.log(recipes);
    //     }, []);


//     const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

    return (
        <div>
        <h3>You are in Recipe Update page</h3>

        <img src={recipes?.imgURL} width="100px" />

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