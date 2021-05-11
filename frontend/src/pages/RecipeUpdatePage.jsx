import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useEffect } from "react";
import RecipePostApi from "../api/RecipePostApi";
import Updatebutton from "../resources/images/UpdateButton.png";


export default function RecipeUpdatePage() {
    
    const [data , setData] = useState(null)
    
    // Miss: getting the id from the user clicking from the ReviewPage (icon)

    useEffect(() => {
        const fetchData = async () => {
            setData(await RecipePostApi.getRecipeById(id))
        }
        fetchData()
    }, [])

    return (

        <Link> 
        <button> Updatebutton </button>
        </Link>
        
        data ? <UpdateSubmitForm preloadedValues={data}/> : <div>Loading...</div>
    )
}