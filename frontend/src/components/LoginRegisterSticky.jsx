import { Link } from "react-router-dom";

export default function LoginRegister() {

    return (
        <div className="loginRegister">
            <div className="loginBlockContainer">
                <Link to="/login">
                    <button className="buttonLogin">Log in</button>
                </Link>
                <Link to="/register">
                    <button className="buttonRegister">Register</button>
                </Link>
            </div>
            <div className="loginBlockContainer">
                <Link to="/home">...or continue as a guest</Link>
            </div>
        </div>

    );
}