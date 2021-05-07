import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import ReactImageUploadComponent from "react-images-upload";
import { useRecoilState } from "recoil";
import { recipeImgState } from "../state/recipeImgState";

export default function UploadRecipeImg() {

    // Global state
    const [imageURL, setImageURL] = useRecoilState(recipeImgState);

    const uploadImage = (e) => {
        // constructs the formData
        const imageFile = e[0];
        const formData = new FormData()
        formData.append("file", imageFile)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        // post request
        console.log("before setImageURL", formData);
        setImageURL(formData);
        console.log("after imgURL");
    };

    const postToCloud = async() => {
        try {
            if (imageURL !== null) {
              const response = await Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", imageURL);
              //await axios will send a response
              console.log("received response from cloud");
              console.log(response.data.url);
              //simulate the event object so its doesn’t clash with handleChange
              // TODO: understand this one?
            //   uploadImg({
            //     target: {
            //       name: 'imageURL',
            //       value: response.data.url,
            //     },
            //   });
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=> {
          postToCloud();
       //to fire postToCloude after the imgURL changed
    },[imageURL]);

// Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url)
//         });

    return (
        <div>
            <h3>Add recipe image</h3>

            <ReactImageUploadComponent
            singleImage={true}
            onChange={uploadImage}
            buttonText= 'Choose images'
            withLabel={false}
            withIcon={false}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            buttonClassName=''
            />

                {/* <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button className="buttonUpload" onClick={uploadImage}> Upload Image</button> */}
        </div>
    )
}
