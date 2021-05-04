import React from "react";
import Axios from "axios";
import { useState } from "react";

// link from the button to here

export default function PostPage() {

    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = () => {
        // constructs the formData
        const formData = new FormData()
        formData.append("file", imageSelected)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        
        // post request
        Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {console.log(response);
        });
    };


    return (
        <div>
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>
            <input type="file" onChange={(event) => setImageSelected(event.target.files[0])}/>

            <button onClick={uploadImage}> Upload Image</button>

        </div>
    )
}