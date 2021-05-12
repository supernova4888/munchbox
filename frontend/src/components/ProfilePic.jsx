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
        <div className="profileImageBox">
            {user.profileId === "1" && (
                <img className="profileMain" src={pic1} />
            )}
            {user.profileId === "2" && (
                <img className="profileMain" src={pic2} />
            )}
            {user.profileId === "3" && (
                <img className="profileMain" src={pic3} />
            )}
            {user.profileId === "4" && (
                <img className="profileMain" src={pic4} />
            )}
            {user.profileId === "5" && (
                <img className="profileMain" src={pic5} />
            )}
        </div>

    );
}
