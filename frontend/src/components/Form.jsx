import React from 'react'

const Form = (props) => (
    <form onSubmit={props.getRecipeLink}>
    <input type="text" name="recipeLink"/>
    <button>Save and Fetch</button>
    </form>
);

export default Form;
