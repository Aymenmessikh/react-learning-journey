import { useNavigate } from "react-router-dom";

export default function ShowUserSummary({ user, onDelete }) {
    const navigate = useNavigate();

    function goToDetails() {
        navigate(`/user/detail/${user.id}`);
    }

    function goToEdit() {
        navigate(`/users/edit/${user.id}`);
    }

    function handleDelete() {
        onDelete(user.id);
    }
    function goToCreateOrEdit() {
        navigate(`/users/createoredit/${user.id}`);
    }


    return (
        <li>
            <strong>{user.name}</strong><br />
            <span>{user.email}</span><br />

            <button onClick={goToDetails} style={{ marginRight: "10px" }}>
                Show Details
            </button>

            <button onClick={goToEdit} style={{ marginRight: "10px" }}>
                Edit
            </button>

            <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
                Delete
            </button>

            <button onClick={goToCreateOrEdit} style={{ marginLeft: "8px" }}>
                Edit (create or edit)
            </button>

        </li>
    );
}
