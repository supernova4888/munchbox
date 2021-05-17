import React, { useEffect, useState } from "react";
import UserApi from "../api/UserApi";
import FollowerApi from "../api/FollowerApi";
import NewFollowerForm from "../components/NewFollowerForm";

export default function FollowerCard() {
    const[currentUser, setCurrentUser] = useState({});
    const[follower, setFollower] = useState([]);

  useEffect(() => {
    UserApi.getCurrentUser()
      .then(({ data }) => {
        setCurrentUser(data.id);
        console.log(data.id)
      })
      .catch((err) => console.error(err));
  }, [setCurrentUser]); 

  async function createFollower(followUserName) {
    console.log(currentUser);
    try {
      const response = await FollowerApi.createFollower(currentUser, followUserName);
      console.log("user created")
      console.log(followUserName)
      const follow = response.data;
      const newFollower = follower.concat(follow);
      setFollower(newFollower);
      console.log("follow")
    } catch (e) {
      console.error(e);
    }
  }
   
    return (
        <div className = "followerCard_followerForm">
            <NewFollowerForm 
             onSubmit={(followUserName) => createFollower(followUserName)}
            />           
        </div>    
    );
}