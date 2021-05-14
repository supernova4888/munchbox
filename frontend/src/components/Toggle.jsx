import React, { useState } from "react";
import toggleOn from "../resources/icons/toggle-on.png";
import toggleOff from "../resources/icons/toggle-off.png";
export default function ToggleButton() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <div>
            <button className="logoutButton" onClick={toggleTrueFalse}>
                {isToggled ? <img className="toggleImg"  width="40px" src={toggleOn}/>:<img className="toggleImg" width="40px" src={toggleOff}/>}
            </button>
        </div>
    );
}