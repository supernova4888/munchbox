import React from "react";
import logo from "../resources/logo.png";

export default function AboutInfo() {

return (
        <div className="card">
    <div className="card-body">
        <img className="logoSmall" src={logo} alt= "logo" />
        <div className="abouttext-heading">
        <h1>About munchbox</h1></div>
        <p>
            MunchBox is a sleek multiplatform recipe manager,
            accessible on iOS, Android, tablets and desktop devices.
            <br/>
            Munchbox helps you save and track your favorite recipes, connect with friends and curate meals in a fun way with Spinner.</p>
            <div className="abouttext-heading">
            {/* <h2>Main Features of Beta Version</h2></div>
            <div className="features-list">
                <h4>MunchBox is your very own personal recipe organiser.</h4>
            <ul>
            <li>Add favourite recipes from websites, magazines or recipe books  all in one place.</li>
            <li>Add personal Food preference, allows individual users to save and view in their profile page.</li>  
            <li>Save, update and delete recipes already created. </li>  
            <li>Review recipes with star rating and comments to facilitate meal planning</li>
            <li>Follow other users and their recipes.</li>
            <li>Help you decide that to cook with Spinner</li>
            <li>Accessible on all of your devices, anytime.</li>
            </ul>  */}
             <p className = "abouttext-heading"> Note: Guest Users can only view home page and use the Spinner</p>
            </div>
        </div>
        </div>
 );




}