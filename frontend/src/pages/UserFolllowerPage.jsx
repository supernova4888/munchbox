import React, { useEffect, useState } from "react";
import FollowerApi from "../api/FollowerApi";

export default function FollowerPage() {
    const [follower, setFollower] = useState([]);

useEffect(() => {
    FollowerApi.listAllFollowers()
    .then(({ data }) => setFollower(data))
    .catch((err) => console.error(err));
}, [setFollower]);


return (
    <div>
        <h1 className= "followers--heading">People you Follow</h1>
    </div>
);
}
