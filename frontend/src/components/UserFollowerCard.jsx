import React, { useState} from "react";
import followerProfile from "../resources/profilepics/followers.png";

export default function UserFollowerCard({ followers }) {
    
    return (
        <div className="usercard">
            <img className="followerMain" src={followerProfile} alt = "userPic"/> 
            
            <div className="userFollowName">{followers.followUserName}</div>
        </div>
    )
}