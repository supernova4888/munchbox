import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Image } from "cloudinary-react";

// link from the button to here

export default function PostPage() {

    const [imageSelected, setImageSelected] = useState("");
    const [imageURL, setImageURL] = useState("");

    const uploadImage = () => {
        // constructs the formData
        const formData = new FormData()
        formData.append("file", imageSelected)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        
        // post request
        Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.secure_url);
        });
    };

    useEffect(() => {
        fetch("https://localhost:8080/recipe", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)

        })
        return () => {
            cleanup
        }
    }, [input])

    // another post to save to api.
    // seems to take a while to get the data from the api.


    // id
    // imageString -- nonull
    // title - not null
    // body (recipe link) - notnull
    // username - notnull
    // then upload success (unless recipe link exists already ?)


    return (
        <div>
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>
            <input type="file" onChange={(event) => setImageSelected(event.target.files[0])}/>

            <button onClick={uploadImage}> Upload Image</button>

            <Image 
            style={{width: 200}} cloudName="dt0zgbuyg" publicId="https://res.cloudinary.com/dt0zgbuyg/image/upload/v1620122494/munchbox/qislbl7qg1gsb7pfmqpd.png" />

        </div>
    )
}