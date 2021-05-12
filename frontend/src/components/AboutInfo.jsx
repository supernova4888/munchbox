import React from "react";
import logo from "../resources/logo.png";

export default function AboutInfo() {

return (
        <div className="card">
    <div className="card-body">
        <img className="logoSmall" src={logo} alt= "logo image" />
        <div className="abouttext-heading">
        <h1>About munchbox</h1></div>
        <p>
            MunchBox is a sleek multiplatform recipe manager,
            accessible on your Apple iOS or Android devices,on your tablet, laptop or desktop.
            <br/>
            Cooking can be a hobby, a dreaded necessity or just a
            part of your routine, but no matter what your
            relationship with the kitchen is like, cooking
            takes time and effort. That’s where munchbox
            step in, offering step-by-step
            instructions to help you prepare a hearty home-made
            meal or curate a weekly meal plan that goes perfectly
            with your diet.</p>
            <div className="abouttext-heading">
            <h2>Main Features for Registered User</h2></div>
            <div className="features-list">
                <h4>MunchBox is your very own personal recipe organiser.</h4>
            <ul>
            <li>Add your favourite recipes from websites,
                magazines or recipe books  all in one place.</li>
            <li>Add the Food preference, allows individual users to save and view in their profile page.</li>  
            <li>Save, update and delete recipes already created. </li>  
            <li>Review and follow other users and their recipes.</li>
            <li>Accessible on all of your devices, anytime.</li>
            </ul> 
             <p className = "abouttext-heading"> Note: Guest Users can only view Home and Spinner Page</p>
            </div>
        </div>
        </div>
 );




}