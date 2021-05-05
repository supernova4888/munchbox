import React, { useEffect, useState } from "react";
import FollowerApi from "../api/FollowerApi";
import FollowerCard from "../components/FollowerCard";

export default function FollowerPage() {
    const [follower, setFollower] = useState([]);
    


useEffect(() => {
    FollowerApi.listAllFollowers()
    .then(({ data }) => setFollower(data))
    .catch((err) => console.error(err));
}, [setFollower]);


return (
    <div className="pageBody">
        <h1>People you Follow</h1>
        <div className = "followerContainer">
        <FollowerCard/>
        </div>
    </div>
);
}
