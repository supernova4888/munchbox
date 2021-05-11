    import React, { useState} from "react";
import sampleProfile from "../resources/profilepic200px-05.jpg";
/* import pic1 from "../resources/profilepics/profilepic200px-01.jpg";
import pic2 from "../resources/profilepics/profilepic200px-02.jpg";
import pic3 from "../resources/profilepics/profilepic200px-03.jpg";
import pic4 from "../resources/profilepics/profilepic200px-04.jpg";
import pic5 from "../resources/profilepics/profilepic200px-05.jpg"; */
export default function UserFollowerCard({ followers }) {
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
           {/*  <div className="profileImageBox">
            {followers.profileId === "1" && (
                <img className="profileMain" src={pic1} />
            )}
            {followers.profileId === "2" && (
                <img className="profileMain" src={pic2} />
            )}
            {followers.profileId === "3" && (
                <img className="profileMain" src={pic3} />
            )}
            {followers.profileId === "4" && (
                <img className="profileMain" src={pic4} />
            )}
            {followers.profileId === "5" && (
                <img className="profileMain" src={pic5} />
            )} 
        </div>*/}
            <div className="userFollowName">{followers.followUserName}</div>
        </div>
    )
}