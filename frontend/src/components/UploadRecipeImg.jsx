import React from 'react'
import Axios from "axios";
import { useState, useEffect } from "react";
import { Image } from "cloudinary-react";

export default function UploadRecipeImg({uploadImg}) {

    const [imageURL, setImageURL] = useState(null);
    const [imageSelected, setImageSelected] = useState("");


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
            if (imgURL !== null) {
              const response = await Axios.post(
                //Cloud link to upload the image to
                "https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload”,
                imgURL
              );
              //await axios will send a response
              console.log("received response from cloud");
              console.log(response.data.url);
              //simulate the event object so its doesn’t clash with handleChange
              // TODO: understand this one?
              uploadImg({
                target: {
                  name: “imageUrl”,
                  value: response.data.url,
                },
              });
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=> {
          postToCloude();
       //to fire postToCloude after the imgFile changed
    },[imgFile]);

Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", formData).then((response) => {setImageURL(response.data.url)
        });


    const [imgFile,setImgFile] = useState(null);

    const imgUpload= e => {
        console.log(“fuckthat”,e);

        let imageFile = e[0]; //from console it index 0

        let imagePreset = new FormData();
        imagePreset.append(“file”, imageFile);
        imagePreset.append(“upload_preset”, “HikingBuddy”)
        console.log(“what the fuck”,imagePreset);
        setImgFile(imagePreset);
    }
    const postToCloude = async()=> {
        try {
            if (imgFile!== null) {
              const response = await axios.post(
                //Cloud link to upload the image to
                “https://api.cloudinary.com/v1_1/dz2vr4bag/image/upload”,
                imgFile
              );
              //await axios will send a response
              console.log(“Responce:“,response.data.secure_url);
              //simulate the event object so its doesn’t clash with handleChange
              uploadImg({
                target: {
                  name: “imageUrl”,
                  value: response.data.secure_url,
                },
              });
            }
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=> {
          postToCloude();
       //to fire postToCloude after the imgFile changed
    },[imgFile]);


    return (
        <div>
            <h3>Add recipe image</h3>
                <input type="file" onChange={(e) => setImageSelected(e.target.files[0])}/>
                <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>
        </div>
    )
}
