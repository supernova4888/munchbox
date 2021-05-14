import React from "react";
import { useState } from "react";
import { Image } from "cloudinary-react";
import SubmitForm from "../components/SubmitForm";
import ImageUploader from "../components/ImageUploader";

export default function PostPage() {

const [imageURL, setImageURL] = useState("http://res.cloudinary.com/dt0zgbuyg/image/upload/v1620733872/munchbox/nefbqpkd0agoh7zzwixp.png");

    return (
        <div className="pageBody">
            <h1>Add a new recipe</h1>

            <div className="card">

            <ImageUploader setImage={setImageURL} />
            </div>
            {imageURL !== "" &&
            // TODO: alignment - new css added 
                <img className="recipeImageTwo" src={imageURL} alt="uploadedImage" />
            }
            <div className="card">
            <SubmitForm cloudURL={imageURL}/>
            </div>
        </div>
    );
}
