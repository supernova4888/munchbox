import React from 'react'
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";

export default function UpdateSubmitForm({preloadedValues}) {

    const {register, handleSubmit} = useForm({
        defaultValues: preloadedValues
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        // instead of alert, here it should be the update submissioon to the backend
    }

    // api Update submission to the back end

    return (
        <div>
             <h3>Add recipe details </h3>

            <form className="updateRecipeForm" onSubmit={handleSubmit(onSubmit)}>

                {/* create display img, pass data to an img component. Then allow for change/new img upload in that image component */}

                <input className="form-control" ref={register} onChange={(e) => setTitle(e.target.value)}/>

                <input className="form-control" ref={register} onChange={(e) => setLink(e.target.value)}/>

                <h3>Select recipe main ingredient:</h3>

                {/* not sure if this works with UserForm? */}
                <select id = "dropdown" onChange={(e) => setIngredient(e.target.value)}>
                    <option>Select main ingredient:</option>
                    <option value="Beef">Beef</option>
                    <option value="Veal">Veal</option>
                    <option value="Pork">Pork</option>
                    <option value="Lamb and Mutton">Lamb and Mutton</option>
                    <option value="Poultry">Poultry</option>
                    <option value="Seafood">Seafood</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                </select>

                <Popup trigger={
                <button className="buttonPost"type="submit"> Update Post </button>} modal nested>
                    {close => (
                        <div className="modal">
                        <button className="close" onClick={close}> &times;  
                        </button>
                        <div className="content">
                        {' '}
                        🎉 Recipe has been sucessfully updated! 🎉
                        </div>
                        </div>)}
                </Popup>
    
            
        </div>
    )
}
