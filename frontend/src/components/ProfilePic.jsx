import React, { useState, useEffect } from 'react'
import UserApi from "../api/UserApi";
import pic1 from "../resources/profilepics/profilepic200px-01.jpg";
import pic2 from "../resources/profilepics/profilepic200px-02.jpg";
import pic3 from "../resources/profilepics/profilepic200px-03.jpg";
import pic4 from "../resources/profilepics/profilepic200px-04.jpg";
import pic5 from "../resources/profilepics/profilepic200px-05.jpg";

export default function ProfilePicCurrent() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        UserApi.getCurrentUser()
            .then(({data}) => setUser(data))
            .catch((err) => console.error(err));
    }, [setUser]);


    return (
        <div>
            {user.profileId === "2" && (
                <img src={pic1} />
            )}
            {user.profileId === "4" && (
                <img src={pic2} />
            )}
        </div>

    );
}
