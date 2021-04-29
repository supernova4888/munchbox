import { Link } from "react-router-dom";
import home from "../resources/mobile_navbar/house.svg";
import pot from "../resources/mobile_navbar/dinner.svg";
import spinner from "../resources/mobile_navbar/hurricane.svg";
import profile from "../resources/mobile_navbar/user.svg";
import plus from "../resources/mobile_navbar/invitation.svg";

export default function Navbar() {
    return (
        <footer className="navbarFooter">
            <ul>
                <li><Link to="/home"><img className="svgIcon" src={home}/></Link></li>
                <li><Link to="/profile"><img className="svgIcon" src={profile}/></Link></li>
                <li><Link to="/post"><img className="svgIconLg" src={plus}/></Link></li>
                <li><Link to="/spinner"><img className="svgIcon" src={spinner}/></Link></li>
                <li><Link to="/post"><img className="svgIcon" src={pot}/></Link></li>
            </ul>
        </footer>
    );
}