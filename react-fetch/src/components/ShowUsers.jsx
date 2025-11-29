import React from "react";
import ShowUserSummary from "./ShowUserSummary";
import { useGetAllUsers } from "../services/UsersServices";

export default function ShowUsers() {
    const { data: users, loading, error } = useGetAllUsers(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h2>Liste des utilisateurs (via custom hook)</h2>
            <ul>
                {users.map((u) => (
                    <ShowUserSummary key={u.id} user={u} />
                ))}
            </ul>
        </div>
    );
}
