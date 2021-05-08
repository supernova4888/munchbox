import React, { useState, useEffect } from 'react'
import UserApi from "../api/UserApi";
import meat from "../resources/ingredients/meat-filled.png";
import chicken from "../resources/ingredients/chicken-filled.png";
import fish from "../resources/ingredients/fish-filled.png";
import egg from "../resources/ingredients/egg-filled.png";
import carrot from "../resources/ingredients/carrot-filled.png";


export default function FoodIdCurrent() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        UserApi.getCurrentUser()
            .then(({data}) => setUser(data))
            .catch((err) => console.error(err));
    }, [setUser]);


    return (
        <div>
            {user.foodId === "1" && (
                <img className="profileFood" src={meat} />
            )}
            {user.foodId === "2" && (
                <img className="profileFood" src={chicken} />
            )}
            {user.foodId === "3" && (
                <img className="profileFood" src={fish} />
            )}
            {user.foodId === "4" && (
                <img className="profileFood" src={egg} />
            )}
            {user.foodId === "5" && (
                <img className="profileFood" src={carrot} />
            )}
        </div>

    );
}
