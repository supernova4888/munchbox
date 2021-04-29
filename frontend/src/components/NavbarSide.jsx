import { Link } from "react-router-dom";
import pot from "../resources/navbar/pan.svg";
import home from "../resources/navbar/home.svg";
import spinner from "../resources/navbar/pinwheel.svg";
import profile from "../resources/navbar/profile-user.svg";
import squarelogo from "../resources/logo_transparent_square.png";

export default function NavbarSide() {
    return (
        <div className="navbarSide">
            <div className="navItem">
                <div className="navIcon">
                    <img className="navLogo" src={squarelogo}/>
                </div>
            </div>
            <div className="navItem">
                <Link to="/home">
                    <div className="navIcon">
                        <img className="svgIcon" src={home}/>
                    </div>
                    <div className="navLabel">
                        Home
                    </div>
                </Link>
            </div>
            <div className="navItem">
                <Link to="/profile">
                    <div className="navIcon">
                        <img className="svgIcon" src={profile}/>
                    </div>
                    <div className="navLabel">
                        Profile
                    </div>
                </Link>
            </div>
            <div className="navItem">
                <Link to="/post">
                    <div className="navIcon">
                        <img className="svgIcon" src={pot}/>
                    </div>
                    <div className="navLabel">
                        Post
                    </div>
                </Link>
            </div>
            <div className="navItem">
                <Link to="/spinner">
                    <div className="navIcon">
                        <img className="svgIcon" src={spinner}/>
                    </div>
                    <div className="navLabel">
                        Spinner
                    </div>
                </Link>
            </div>
        </div>
    );
}