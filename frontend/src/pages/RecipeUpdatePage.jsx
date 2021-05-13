import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useEffect, useState } from "react";
import RecipePostApi from "../api/RecipePostApi";
import Updatebutton from "../resources/images/UpdateButton.png";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function RecipeUpdatePage() {

const [recipes, setRecipes] = useState("");
const {id} = useParams();
    
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
        <p>You are in Recipe Update page</p>


        <UpdateSubmitForm />


        {/* this didnt work */}
            {/* <Image className="recipeImageMedium" cloudName="dt0zgbuyg" publicId={recipePost.imgURL}/> */}

        {/* <form className="updateRecipeForm" > */}

                {/* create display img, pass data to an img component. Then allow for change/new img upload in that image component */}
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