/* eslint-disable no-undef */
/* import React, { useState, useEffect } from "react";
import FollowerApi from "../api/FollowerApi" ;
import UserCard from "./UserCard";
import pluspurple from "../resources/mobile_navbar/pluspurple.png"

export default function CreateFollower(){

const[follower, setFollower] = useState([]);
const [user, setUser] = useState([]);


async function createFollower(userData) {
        try {
            const response = await FollowerApi.createFollower(userData);
            const follower = response.data;
            const newFollowers = user.concat(follower);

            setFollower(newFollowers);
        } catch (e) {
            console.error(e);
            console.log(createFollower);
        }
    }

const newFollowers = follower.filter((p) => p.id !== user.id);
            setFollower(newFollowers);
           
 useEffect(() => {
        FollowerApi.listAllFollowers()
            .then(({ data }) => setFollower(data))
            .catch((err) => console.error(err));
    }, []);

    

 return(
         <div>
             <button
                    className="btn-plus"
                    onClick={(FollowerData) => createFollower(userData)} >
                <img className="pluspurple" src={pluspurple} alt= "followsign" />
                </button>
        </div>
 )
}  */