import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

export default function RecipeUpdatePage() {

const [imageURL, setImageURL] = useState("");
const {id} = useParams();
    
    // TODO: fix icon linking from review to here

    return (
        <div>
        <h3>You are in Recipe Update page</h3>

        <p>Edit image</p>

        <ImageUploader setImage={setImageURL} />

        <UpdateSubmitForm cloudURL={imageURL}/>

        </div>
    )
}