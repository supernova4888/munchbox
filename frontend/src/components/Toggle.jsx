import React, {useEffect, useState} from "react";
import toggleOn from "../resources/icons/toggle-on.png";
import toggleOff from "../resources/icons/toggle-off.png";
import FollowerApi from "../api/FollowerApi";
import RecipePostApi from "../api/RecipePostApi";
import UserApi from "../api/UserApi";
import {useParams} from "react-router";
export default function ToggleButton({onSubmit}) {
    const [isToggled, setToggled] = useState(false);
   /* const toggleTrueFalse = () => setToggled(!isToggled);*/

    const handleSubmit = () => {
        onSubmit({
            isToggled: false,
        });
        setToggled(true);
    };
   /* const[userId,setUserId]= useState({});
    const[postId,setPostId]= useState({});
    const[favorite,setFavorite]= useState([]);
    const {id} = useParams();

    useEffect(() => {
        UserApi.getCurrentUser()
            .then(({ data }) => {
                setUserId(data.id);

                console.log("user:" + data.id)
            })
            .catch((err) => console.error(err));
    }, [setUserId]);

    useEffect(() => {
        RecipePostApi.getRecipeById(id)
            .then(({ data }) => {
                setPostId(data.id);
                console.log("recipe:" + data.id)
            })
            .catch((err) => console.error(err));
    }, [setPostId]);
    async function createFavoriteRecipe() {
        console.log("Favorite created")
        try {
            const response = await RecipePostApi.createFavoriteRecipes(userId,postId);
            console.log("Favorite created succ")
            const favoriteRecipe = response.data;
            const newFavoriteRecipe = favorite.concat(favoriteRecipe);
            setFavorite(newFavoriteRecipe);
            console.log("favoriteRecipe")
        } catch (e) {
            console.error(e);
        }
    }*/

    return (
        <div>
            {/*<form className="recipeForm">*/}
            <button className="logoutButton" onClick={handleSubmit}>
                {isToggled ? <img className="toggleImg"  width="40px" src={toggleOn}/>:<img className="toggleImg" width="40px" src={toggleOff}/>}
            </button>
{/*            </form>*/}
        </div>
    );
}