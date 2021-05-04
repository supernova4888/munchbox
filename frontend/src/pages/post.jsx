import React from "react";

// link from the button to here

export default function PostPage() {

    const uploadImage = (files) => {
        console.log(files[0]);

    }


    return (
        <div>
            <h1>PostPage - Add a new recipe</h1>
            <p>You are on the post page now.</p>
            <input type="file" onChange={(event) => {uploadImage(event.target.files)}}/>

        </div>
    )
}