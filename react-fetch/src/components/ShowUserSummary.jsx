import { useNavigate } from "react-router-dom";

export default function ShowUserSummary({ user }) {
    const navigate = useNavigate();

    function goToDetails() {
        navigate(`/user/detail/${user.id}`);
    }

    function goToEdit() {
        navigate(`/users/edit/${user.id}`);
    }

    return (
        <li>
            <strong>{user.name}</strong><br />
            <span>{user.email}</span><br />

            <button onClick={goToDetails} style={{ marginRight: "10px" }}>
                Show Details
            </button>

            <button onClick={goToEdit}>
                Edit
            </button>
        </li>
    );
}
