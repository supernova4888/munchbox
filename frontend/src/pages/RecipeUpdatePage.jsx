import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useEffect } from "react";


export default function RecipeUpdatePage() {
    const preloadedValues = {
        title: title,
        body: link,
        imgURL: cloudURL,
        mainIngredient: ingredient
    }

    const [data , setData] = useState(null)
    

    useEffect(() => {
        const fetchData = async () => {
            setData(await.get)
        }
        return () => {
            cleanup
        }
    }, [input])

    return (
        <div>
            
        </div>
    )
}


preloadedValues