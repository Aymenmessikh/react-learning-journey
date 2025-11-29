import React, { useEffect, useState } from "react";
import ShowUserSummary from "./ShowUserSummary";

export default function ShowUsersExample() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Erreur réseau !");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, []);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <ul>
                {users.map((u) => (
                    <ShowUserSummary key={u.id} user={u} />
                ))}
            </ul>
        </div>
    );
}
