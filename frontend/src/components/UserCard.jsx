import React, { useState} from "react";
import sampleProfile from "../resources/profilepic200px-05.jpg";
import pluspurple from "../resources/mobile_navbar/pluspurple.png";
// import CreateFollower from "../components/CreateFollower";
import { Link } from "react-router-dom";


export default function UserCard({ user }) {
    /* const [users, setUsers] = useState([]);
    const [follower, setFollower] = useState([]); */
   


        /* const handleClickCreate = () => {
        setFollower(!follower)
        setUsers(false)  

    } 
     */

    
    return (
        <div className="usercard">
            <img className="userFollowPicSmall" src={sampleProfile} alt = "userPic"/>
            <div className="userFollowName">{user.name}</div>

            <button> 
                 <Link path to="/profile/follower/youfollow">
                <img className="plus-follow" src={pluspurple} alt= "followsign" />
                
                {/* <CreateFollower/> */}
                </Link>
                </button>

        </div>
        
    )
}