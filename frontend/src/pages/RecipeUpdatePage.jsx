import React from 'react'
import UpdateSubmitForm from "../components/UpdateSubmitForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

export default function RecipeUpdatePage() {

const [imageURL, setImageURL] = useState("");

    return (
        <div className="pageBody">
            <h1>Edit Recipe </h1>

            <div className="card">
                <div className="card-body">

                    <h3>Edit image</h3>
                    <ImageUploader setImage={setImageURL} />
                        <div className="card">
                        {imageURL !== "" && <img className="recipeImageTwo" src={imageURL} alt="uploadedImage" />}
                        </div>
                    <UpdateSubmitForm cloudURL={imageURL}/>
                </div>
            </div>
        </div>
    )
}