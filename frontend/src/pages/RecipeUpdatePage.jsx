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

    // recipe data is here, but i can't retrieve it
    // ? why sometimes the useEffect loads and sometimes not?
    const preloadedValues = {
        title: "lala"
       
    }

    //  body: recipes.,
    //         imgURL: cloudURL,
    //         mainIngredient: ingredien

    const {register, handleSubmit} = useForm({
        defaultValues: preloadedValues
    });

    const onSubmit = (recipes) => {
        alert(JSON.stringify(recipes));
    };

    useEffect(() => {
            RecipePostApi.getRecipeById(id)
                .then(({data}) => setRecipes(data))
                .catch((err) => console.error(err));
                console.log(recipes);
        }, [setRecipes]);

    return (
        <div>
        <p>You are in Recipe Update page</p>
        {/* broken */}
        {/* <UpdateSubmitForm preloadedValues={data} /> */}
        {/* button to edit img */}

        <form className="updateRecipeForm" onSubmit={handleSubmit(onSubmit)}>

                {/* create display img, pass data to an img component. Then allow for change/new img upload in that image component */}


                <input {...register('title')} type="text" />
                <input {...register('recipeurl')} type="text" />
                <input {...register('imgURL')} type="text" />
        </form>

        </div>
    )
}