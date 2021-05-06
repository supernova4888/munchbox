//eslint-disable no-undef 
import React, { useState, useEffect } from "react";
import FollowerApi from "../api/FollowerApi" ;
//import UserCard from "./UserCard";
//import pluspurple from "../resources/mobile_navbar/pluspurple.png"

export default function CreateFollower({user}){

const[follower, setFollower] = useState([]);
const [userName, setUserName] = useState([]);

                /* function createFollower(){
                    //if(body === "")
                    //{return};
                    const newFollower = {
                        followUserName:props.user.name
                    };

                    FollowerApi.createFollower(user.id, newFollower)
                    .then(() => {
                        setFollower([]);
                    })
                }
            */
/*   useEffect(() => {
        FollowerApi.listAllFollowers(user.id)
            .then((response) => setFollower(response.json))
            .catch((err) => console.error(err));
    }, []);  */

    async function createFollower (event) {
        event.preventDefault();
        console.log("inside createFollower function");
        const newFollower = {
            followUserName: userName
            
        }
        try {
            const response = await FollowerApi.createFollower(user.id,newFollower);
            console.log(response.data);
            setFollower(response.data);
        } catch (e) {
            console.error(e);
        }
    }



 return(
         <div className= "user-follower">
           <h3>Enter user name to follow</h3>
            <form className="followerForm" onSubmit={createFollower}>
                <input className="form-control" type="text" onChange={(e) => setUserName(e.target.value)}/>
                <button className="buttonRegister" type="submit">Submit</button>
            </form>
        </div>
 )
}  