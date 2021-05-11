import React, { useState} from "react";
import sampleProfile from "../resources/profilepic200px-05.jpg";




export default function UserCard({ user }) {

    
    return (
        <div className="usercard">
            
            <img className="userFollowPicSmall" src={sampleProfile} alt = "userPic"/>            
            <div className="userFollowName">{user.name}
            </div>            
        </div>
        
    )
}