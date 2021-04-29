import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <footer className="navbarFooter">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/post">Post</Link></li>
            </ul>
        </footer>
    );
}