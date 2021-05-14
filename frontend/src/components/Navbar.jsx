import { Link } from "react-router-dom";
/* top nav */
import house from "../resources/mobile_navbar/house.svg";
import plate from "../resources/mobile_navbar/dinner.svg";
import spinner from "../resources/mobile_navbar/hurricane.svg";
import user from "../resources/mobile_navbar/user.svg";
import pluspurple from "../resources/mobile_navbar/pluspurple.png";
/* new sidenav */
import houseW from "../resources/navbar/house-white.png";
import plateW from "../resources/navbar/dinner-white.png";
import spinnerW from "../resources/navbar/hurricane-white.png";
import userW from "../resources/navbar/user-white.png";
import pluswhite from "../resources/mobile_navbar/pluswhite.png";
/* nav logo */
import navLogo from "../resources/logo_transparent_square.png";


export default function Navbar() {
    return (
        <footer className="navbarFooter">
            <ul>
                <li>
                    <Link to="/home">
                        <img className="svgIcon" src={house}/>
                        <div className="tooltip">
                            <img className="svgIconSide" src={houseW}/>
                            <span className="tooltiptext">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <img className="svgIcon" src={user}/>
                        <div className="tooltip">
                            <img className="svgIconSide" src={userW}/>
                            <span className="tooltiptext">Profile</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/post">
                        <img className="svgIconLg" src={pluspurple}/>
                        <div className="tooltip">
                            <img className="svgIconSide" src={pluswhite}/>
                            <span className="tooltiptext">Post</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/spinner">
                        <img className="svgIcon" src={spinner}/>
                        <div className="tooltip">
                            <img className="svgIconSide" src={spinnerW}/>
                            <span className="tooltiptext">Spinner</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/MySavedRecipePage">
                        <img className="svgIcon" src={plate}/>
                        <div className="tooltip">
                            <img className="svgIconSide" src={plateW}/>
                            <span className="tooltiptext">My Saved Recipes</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <img className="svgIconSide2" src={navLogo}/>
                </li>
            </ul>
        </footer>
    );
}