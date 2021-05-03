import exit from "../resources/navbar/exit-white.png"

export default function LogoutButton({ onLogout }) {
    return (
        <div className="logout">
            <div className="exitBox">
            <button
                className="logoutButton"
                onClick={onLogout}
            >
                <img className="svgIconExit" src={exit} />
            </button>
            </div>
        </div>
    );
}