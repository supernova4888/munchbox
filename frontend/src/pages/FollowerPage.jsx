import React, { useState, useEffect } from "react";
import UserApi from "../api/UserApi";
import UserCard from "../components/UserCard";
import FollowerCard from "../components/FollowerCard";

export default function FollowerPage() {

const [user, setUser] = useState([]);
const UsersArray = user.map((user) => (
        <UserCard key={user.id} user={user}/>
    ));
    
useEffect(() => {
    UserApi.getAllUsers()
    .then(({data}) => {
        const filteredResults = data.filter((userA) => userA.name !== user.name);
        setUsers(filteredResults)
    })
    .catch((err) => console.error(err));
}, [setUser,setUsers]);

    const UsersArray = users.map((user) => (
        <UserCard key={user.id} user={user}/>
    ));

return (
    <div>
        <h1>Followers</h1>
        <div className="pageBody">
            <div className = "followerContainer">
                <h2 className="followerSuggestion">Suggestions to Follow</h2>
                    {UsersArray} 
                <FollowerCard/>    
            </div>
        </div> 
    </div>    
);
}

