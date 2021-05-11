import React, { useEffect, useState } from "react";
import FollowerApi from "../api/FollowerApi";
import UserFollowerCard from "../components/UserFollowerCard";
import UserApi from "../api/UserApi"

export default function UserFollowerPage() {
    const [follower, setFollower] = useState([]);
    const[currentUser, setCurrentUser] = useState([]);

    const UserfollowArray = follower.map((followers) => (
        <UserFollowerCard key={followers.id} followers={followers}/>
));

useEffect(() => {
    UserApi.getCurrentUser()
      .then(({ data }) => {
        setCurrentUser(data.id);
        console.log(data.id)
      })
      .catch((err) => console.error(err));
  }, [setCurrentUser]);

  useEffect(() => {
    FollowerApi.listAllFollowers(currentUser)
      .then(({ data }) => {
        setFollower(data);
        console.log(data)
      })
      .catch((err) => console.error(err));
  }, [setFollower]);


return (
    <div>
        <h1 className= "user-followers--heading">People you Follow</h1>
        <br/>
        {UserfollowArray}
    </div>
);
}
