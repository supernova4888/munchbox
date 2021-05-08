import React from 'react'
import { useState, useEffect } from "react";
import RecipePostApi from "../api/RecipePostApi";
import { Image } from "cloudinary-react";

export default function SubmitForm({cloudURL}) {

    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    // TODO: add dropdown menu to choose pre-defined ingredient
    const [ingredient, setIngredient] = useState ("");

    useEffect(() => {
        RecipePostApi.getAllRecipes()
        .then((response) => setRecipes(response.json))
        .catch((err) => console.log(err));
        }, []);

    // img posted to cloud
    // not being creted in the BE    
    async function createRecipe (event) {
        event.preventDefault();
        const newRecipe = {
            title: title,
            body: link,
            imgURL: cloudURL,
            mainIngredient: ingredient
        }
        try {
            const response = await RecipePostApi.createRecipe(newRecipe);
            console.log(response.data);
            setRecipes(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h3>Add recipe details </h3>

            <form className="recipeForm" onSubmit={createRecipe}>

                <input className="form-control" placeholder="Enter Recipe Title" type="text" onChange={(e) => setTitle(e.target.value)}/>

                <input className="form-control" placeholder="Paste Link Here" type="text" onChange={(e) => setLink(e.target.value)}/>

                <h3>Select recipe main ingredient:</h3>
                <input className="form-control" type="text" onChange={(e) => setIngredient(e.target.value)}/>

                <button className="buttonRegister" type="submit">Submit</button>

            </form>
        </div>
    )
}






// userProfilePage
// import React, { useEffect, useState } from ‘react’
// import imgPlaceholder from “../../assets/placeholder.jpeg”
// import ImgUpload from ‘./ImgUpload’;
// import UserApi from “../../api/UserApi”


// export default function UserProfile({userData}) {
//     const [userForm, setUserForm]= useState({
//         name: userData.name,
//         email: userData.email,
//         bio:userData.bio,
//         imageUrl: userData.imageUrl,
//     });
// console.log(“userDatafromUser”, userData)
//     const change= ({target:{name, value}}) =>{
//         setUserForm({...userForm,
//         [name]: value,
//         });
//     }
//     const updateUser= async ()=> {
//         try{
//             await UserApi.updateUser(userForm)
//             .then(response=>{setUserForm(response.data)});
//         }catch(e){
//             console.error(e)
//         }
//     }
//     const handleSubmit = e => {
//         e.preventDefault();
//         updateUser(userForm);
//     }
//     useEffect(()=>{
//        const fetchUser= async()=>{
//            try{
//                await UserApi.getUser()
//                .then(res => setUserForm(res.data))
//              }catch(err){
//                console.error(err)
//              }
//             }
//             fetchUser()
//     },[])
//     return (
//         <div className=“profile”>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                 <img className=“img” src={userForm?.imageUrl} alt=“” /> <br />
//                 <ImgUpload className=“profile” uploadImg={change}/>

//                 <label htmlFor=“name-input”>Name:</label>

//                 <input type=“text” id=“name-input” name=“name”
//                 value={userForm.name} onChange={change}/>
//                 </div>
//                 <div>
//                 <label htmlFor=“email-input”>Email:</label>
//                 <input type=“text” id=“email-input” name=“email”
//                 value={userForm.email} onChange={change}/>
//                 </div>
//                 <div>
//                 <label htmlFor=“bio-input”>Bio:</label>
//                 <input type=“text” id=“bio-input” name=“bio”
//                 value={userForm.bio} onChange={change}/>
//                 </div>
//                <button type=“submit”>Save Changes </button>
//             </form>
//         </div>
//     )
// }




