import { Link } from "react-router-dom";
/* top nav */
import house from "../resources/mobile_navbar/house.svg";
import plate from "../resources/mobile_navbar/dinner.svg";
import spinner from "../resources/mobile_navbar/hurricane.svg";
import user from "../resources/mobile_navbar/user.svg";
import plus from "../resources/mobile_navbar/invitation.svg";
import pluspurple from "../resources/mobile_navbar/pluspurple.png";
/* side nav */
import home from "../resources/navbar/home.svg";
import profile from "../resources/navbar/profile-user.svg";
import pinwheel from "../resources/navbar/pinwheel.svg";
import pot from "../resources/navbar/pan.svg";

export default function Navbar() {
    return (
        <footer className="navbarFooter">
            <ul>
                <li><Link to="/home"><img className="svgIcon" src={house}/><img className="svgIconSide" src={home}/></Link></li>
                <li><Link to="/profile"><img className="svgIcon" src={user}/><img className="svgIconSide" src={profile}/></Link></li>
                <li><Link to="/post"><img className="svgIconLg" src={pluspurple}/></Link></li>
                <li><Link to="/spinner"><img className="svgIcon" src={spinner}/><img className="svgIconSide" src={pinwheel}/></Link></li>
                <li><Link to="/post"><img className="svgIcon" src={plate}/><img className="svgIconSide" src={pot}/></Link></li>
            </ul>
        </footer>
    );
}