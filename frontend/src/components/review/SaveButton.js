import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default function SaveButton(){
    const BarStyling = {width:"8rem",background:"#6A425C", border:"black", padding:".5rem",text:"white"};
    return(
        <Link to="/save">
            <button className="buttonSave"
                    style={BarStyling}>Save Review</button>
        </Link>
    );
}