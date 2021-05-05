import React, { useState, useEffect } from "react";
import UserApi from "../api/UserApi";
/* import FollowerApi from "../api/FollowerApi";
import CreateFollower from "../components/CreateFollower" */

import UserCard from "../components/UserCard";

export default function FollowerPage() {
 
const [user, setUser] = useState([]);
const UsersArray = user.map((user) => (
        <UserCard key={user.id} user={user}/>
    ));



 useEffect(() => {
    UserApi.getAllUsers()
    .then(({data}) => setUser(data))
    .catch((err) => console.error(err));
}, [setUser]);



return (
    <div className="pageBody">
        <h1 className= "followers--heading">Followers</h1>
        <p className="followers--title">Suggestions to Follow</p>

        <div className = "followerContainer">
                {UsersArray}
        </div>
    </div>
        
);
}

