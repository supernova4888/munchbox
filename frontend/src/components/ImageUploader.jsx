import Axios from "axios";
import { useState, useEffect } from "react";

export default function ImageUploader({setImage}) {
    const [imageSelected, setImageSelected ] = useState("")
    const [imageUrl, setImageUrl] = useState();
    const [flag, setFlag] = useState(false)

    const selectFile = (e) => {
        e.preventDefault();
        setImageSelected(e.target.files[0])
    }

    const uploadImage = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "blp4p8lu")
        setFlag(true)
        setImageUrl(formData);
        console.log("formData", formData)
    };

    useEffect(()=> {
        if(flag){
            postToCloud();
        }
        return () => {setFlag(false)}
    },[imageUrl]);

    const postToCloud = async() => {
        try {
            if (imageUrl !== null) {
                const response = await Axios.post("https://api.cloudinary.com/v1_1/dt0zgbuyg/image/upload", imageUrl);
                setImage(response.data.url);
               // setImageUrl(response.data.url)
                //await axios will send a response
                console.log("received response from cloud");
                console.log(response.data.url);
                console.log("here",imageUrl);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input type="file" onChange={selectFile}/>
            <button className="buttonUpload" onClick={uploadImage}> Upload Image</button>
        </div>
    )
}
