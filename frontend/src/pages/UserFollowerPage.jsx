import React, { useEffect, useState } from "react";
import FollowerApi from "../api/FollowerApi";
import UserFollowerCard from "../components/UserFollowerCard";
import UserApi from "../api/UserApi"

export default function UserFollowerPage() {
    const [follower, setFollower] = useState([]);
    const[currentUser, setCurrentUser] = useState([]);
    const UserfollowArray = follower.map((followers) => (
        <UserFollowerCard key={followers.id}  followers={followers}/>
));

async function getUser(){
  await UserApi.getCurrentUser()
      .then(({ data }) => {
        setCurrentUser(data.id);
        //console.log(data.id)
      })
      .catch((err) => console.error(err));
  }

  async function listAllFollower(getCurrentUser){
    await FollowerApi.listAllFollowers(currentUser)
      .then(({ data }) => {
        setFollower(data);
        console.log(data)
      })
      .catch((err) => console.error(err));
  } 
  useEffect(() => {
    getUser();
  listAllFollower(currentUser);
  });

return (
    <div className="followerContainer">
        <h1 className="followerSuggestion">People you Follow</h1>
        {UserfollowArray}
    </div>
);
}
