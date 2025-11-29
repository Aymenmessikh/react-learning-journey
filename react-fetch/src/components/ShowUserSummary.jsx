import { useNavigate } from "react-router-dom";

export default function ShowUserSummary({ user }) {
    const navigate = useNavigate();

    function goToDetails() {
        navigate(`/user/detail/${user.id}`);
    }

    return (
        <li style={{ marginBottom: "12px", padding: "6px", borderBottom: "1px solid #ddd" }}>
            <strong>{user.name}</strong><br />
            <span>{user.email}</span><br />

            <button onClick={goToDetails} style={{ marginTop: "8px" }}>
                Show Details
            </button>
        </li>
    );
}
