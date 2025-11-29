export default function ShowUserSummary({ user }) {
    return (
        <li style={{ marginBottom: "12px", padding: "6px", borderBottom: "1px solid #ddd" }}>
            <strong>{user.name}</strong><br />
            <span>{user.email}</span>
        </li>
    );
}
