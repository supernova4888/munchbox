import React from "react";
import sampleProfile from "../resources/profilepic200px-05.jpg";

export default function FollowerCard({ follower }) {
    
    


        
    
    return (
        <div className = "followerCard">
            <img className="userFollowPicSmall" src={sampleProfile} alt = "userPic"/>
            <div className="userFollowName">user.name</div>
        </div>
        
    )
}