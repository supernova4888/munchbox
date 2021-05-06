import React, { useEffect, useState } from "react";
import FollowerApi from "../api/FollowerApi";
import FollowerCard from "../components/FollowerCard";

export default function UserFollowerPage({user}) {
    const [follower, setFollower] = useState([]);
    
const UserfollowArray = follower.map((follower) => (
        <FollowerCard key={follower.id} follower={follower}/>
));

useEffect(() => {
    FollowerApi.listAllFollowers(user.id)
    .then(({ data }) => setFollower(data))
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
