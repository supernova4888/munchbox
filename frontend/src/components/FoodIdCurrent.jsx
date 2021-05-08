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
            {user.foodId === "Red Meat" && (
                <img className="profileFood" src={meat} />
            )}
            {user.foodId === "White Meat" && (
                <img className="profileFood" src={chicken} />
            )}
            {user.foodId === "Fish" && (
                <img className="profileFood" src={fish} />
            )}
            {user.foodId === "Vegetarian" && (
                <img className="profileFood" src={egg} />
            )}
            {user.foodId === "Vegan" && (
                <img className="profileFood" src={carrot} />
            )}
        </div>

    );
}
