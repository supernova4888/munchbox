import React, { useState, useEffect  } from "react";
import MyPostedRecipes from "../components/MyPostedRecipes";
import UserApi from "../api/UserApi";

export default function PostedRecipes(){
const [user, setUser] = useState([]);

useEffect(() => {
        UserApi.getCurrentUser()
                .then(({data}) => {
                    setUser(data)
                })
                .catch((err) => console.error(err));
        }, [setUser]);
        
    return(
        <div>
            <MyPostedRecipes user={user}/>
        </div> 
    );
}
