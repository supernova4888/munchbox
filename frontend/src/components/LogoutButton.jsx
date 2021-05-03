import exit from "../resources/navbar/exit-white.png"

export default function LogoutButton({ onLogout }) {
    return (
        <div className="logout">
            <div className="exitBox">
            <button
                className="logoutButton"
                onClick={onLogout}
            >
                <div className="tooltipLogout">
                <img className="svgIconExit" src={exit} />
                <span className="tooltiptext">Log Out</span>
                </div>
            </button>
            </div>
        </div>
    );
}