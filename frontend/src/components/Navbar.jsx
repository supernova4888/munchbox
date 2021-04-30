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


export default function Navbar() {
    return (
        <footer className="navbarFooter">
            <ul>
                <li><Link to="/home"><img className="svgIcon" src={house}/><img className="svgIconSide" src={houseW}/></Link></li>
                <li><Link to="/profile"><img className="svgIcon" src={user}/><img className="svgIconSide" src={userW}/></Link></li>
                <li><Link to="/post"><img className="svgIconLg" src={pluspurple}/></Link></li>
                <li><Link to="/spinner"><img className="svgIcon" src={spinner}/><img className="svgIconSide" src={spinnerW}/></Link></li>
                <li><Link to="/post"><img className="svgIcon" src={plate}/><img className="svgIconSide" src={plateW}/></Link></li>
            </ul>
        </footer>
    );
}