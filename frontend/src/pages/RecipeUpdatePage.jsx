import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useEffect, useState } from "react";
import RecipePostApi from "../api/RecipePostApi";
import Updatebutton from "../resources/images/UpdateButton.png";
import { Link, useParams } from "react-router-dom";

export default function RecipeUpdatePage() {

const [data , setData] = useState(null)
const {id} = useParams();
    
    // Miss: getting the id from the user clicking from the ReviewPage (icon)

    useEffect(() => {
        const fetchData = async () => {
            setData(await RecipePostApi.getRecipeById(id))
        }
        fetchData()
    }, [])


    return (
        <div>
        <p>you are in Recipe Update page</p>
        {/* <UpdateSubmitForm preloadedValues={data} /> */}
        {/* button to edit img */}
        </div>
    )
}