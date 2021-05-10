import React, { useState, useEffect } from "react";
import UserApi from "../api/UserApi";
 import FollowerApi from "../api/FollowerApi";
//import CreateFollower from "../components/CreateFollower" 

import UserCard from "../components/UserCard";
import { useParams } from "react-router";

export default function FollowerPage() {
 
const [user, setUser] = useState([]);
const {id} = useParams();
// const {email} = useParams("");
const [userName, setUserName] = useState("");
const UsersArray = user.map((user) => (
        <UserCard key={user.id} user={user}/>
    ));
/* const follower = user.map((user) => (
        <CreateFollower key={user.id} user={user}/>
    )); */

async function getAllUsers(users){
    try{
        const response = await UserApi.getAllUsers(users);
        const user = response.data;
        const newUser = user.concat(user);
         setUser(newUser);
    }
    catch(e){
        console.error(e);
    }
}
    
 useEffect(() => {
    UserApi.getAllUsers()
    .then(({data}) => setUser(data))
    .catch((err) => console.error(err));
}, [setUser]);

async function createFollower (event) {
        event.preventDefault();
        console.log("inside createReview function");
        const newFollower = {

            followUserName: userName,
        }
        try {
            const response = await FollowerApi.createFollower(id,newFollower);
            console.log(response.data);
            setUser(response.data);
        } catch (e) {
            console.error(e);
        }
    }

return (
    <div>
        <h1 className= "followers--heading">Followers</h1>
        <p className="followers--title">Suggestions to Follow</p>
        <br/>
        <div className = "grid">
                {UsersArray}
                 <h3>Enter user name to follow</h3>
               <form className="followerForm" onSubmit={createFollower}>                 
                <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)}/>
                <button className="buttonRegister" type="submit">Submit</button>
            </form>        
    </div>
        </div>
        
);
}

