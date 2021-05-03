import exit from "../resources/navbar/exit-white.png"

export default function LogoutButton({ onLogout }) {
    return (
        <div className="logout">
            <button
                className="logoutButton"
                onClick={onLogout}
            >
                <img className="svgIconSide" src={exit} />
            </button>
        </div>
    );
}