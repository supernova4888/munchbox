import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import ReactImageUploadComponent from "react-images-upload";
import { useRecoilState, selector } from "recoil";
// State
import { recipeImgState } from "../pages/post";


export default function UploadRecipeImg() {

    // Global state
    const [imageURL, setImageURL] = useState("");
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = (e) => {
        // constructs the formData
        // const imageFile = e[0];
        const formData = new FormData()
        formData.append("file", imageSelected)
        // upload presets - public (connects to cloudinary)
        formData.append("upload_preset", "blp4p8lu")
        // post request
        console.log("before setImageURL", formData);
        setImageURL(formData);
        console.log("after imgURL");
    };

    useEffect(()=> {
          postToCloud();
       //to fire postToCloude after the image has been uploaded/changed
    },[imageURL]);

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
    // need selector to be able to use in PostPage
    // const imgCloudURL = selector({
    //     key: "imgCloudURL",
    //     get: ({get}) => {
    //         const imageURL = get(recipeImgState)

    //         return imageURL
    //     }
    // })

// Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url)
//         });

    return (
        <div>
            <h3>Add recipe image</h3>

                {/* <ReactImageUploadComponent
            singleImage={true}
            onChange={imageURL}/>}
            buttonText= 'Choose images'
            withLabel={false}
            withIcon={false}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            buttonClassName='' /> */}
{/* 
            <input type="file" onChange={(e) => uploadImage(e)}/>

            <button className="buttonUpload" onClick={uploadImage}> Upload Image</button> */}


                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>
        </div>
    )
}
