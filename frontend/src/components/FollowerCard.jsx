import React from "react";
import sampleProfile from "../resources/profilepic200px-05.jpg";

export default function FollowerCard({ follower }) {
    
    


        
    
    return (
        <div className = "followerCard">
            <img className="userFollowerPicSmall" src={sampleProfile} alt = "userPic"/>
            {/* {follower.name} */}
            <div className="userFollowerName">username</div>
            
        </div>
        
    )
}