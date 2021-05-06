import { Link } from "react-router-dom";
/* bottom nav */
import house from "../resources/mobile_navbar/house.svg";
import plate from "../resources/mobile_navbar/dinner.svg";
import spinner from "../resources/mobile_navbar/hurricane.svg";
import user from "../resources/mobile_navbar/user.svg";
import pluspurple from "../resources/mobile_navbar/pluspurple.png";
import usergrey from "../resources/mobile_navbar/user-grey.svg";
import plateGrey from "../resources/mobile_navbar/dinner-grey.svg";
/* new sidenav */
import houseW from "../resources/navbar/house-white.png";
import plateW from "../resources/navbar/dinner-white.png";
import spinnerW from "../resources/navbar/hurricane-white.png";
import userW from "../resources/navbar/user-white.png";
/* nav logo */
import navLogo from "../resources/logo_transparent_square.png";


export default function NavbarGuest() {
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
                        <img className="svgIcon" src={usergrey}/>
                </li>
                <li><Link to="/post"><img className="svgIconLg" src={pluspurple}/></Link></li>
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
                        <img className="svgIcon" src={plateGrey}/>
                </li>
                <li>
                    <img className="svgIconSide2" src={navLogo}/>
                </li>
            </ul>
        </footer>
    );
}