import React from 'react'

const Form = (props) => (
    <form onSubmit={props.getRecipeLink}>
    <input type="text" name="recipeLink"/>
    <button>Search</button>
    </form>
);

export default Form;
