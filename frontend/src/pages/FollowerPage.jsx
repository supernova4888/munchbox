import React, { useState, useEffect } from "react";
import UserApi from "../api/UserApi";
import UserCard from "../components/UserCard";
import FollowerCard from "../components/FollowerCard";

export default function FollowerPage() {

const [users, setUsers] = useState([]);


const [user, setUser] = useState([]);

    useEffect(() => {
        UserApi.getCurrentUser()
            .then(({data}) => {
                setUser(data)
            })
            .catch((err) => console.error(err));
    }, [setUser]);

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

        <div className = "followerContainer">
            <h2 className="followerSuggestion">Suggestions to Follow</h2>
                {UsersArray} 
            <FollowerCard/>    
    </div>
    </div>     
);
}
