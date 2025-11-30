import React, { useState, useEffect } from "react";
import { useGetAllUsers } from "../services/UsersServices";
import ShowUserSummary from "./ShowUserSummary";

export default function ShowUsers() {
    const { data, loading, error } = useGetAllUsers("https://jsonplaceholder.typicode.com/users");

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(data);
    }, [data]);

    async function handleClickDelete(id) {
        if (!window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
            return;
        }
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        });

        alert("Utilisateur supprime : " + id);
        setUsers(users.filter((user) => user.id !== id));
    }

    if (loading) return <p>Chargement…</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h2>Liste des Users</h2>

            <ul>
                {users.map((user) => (
                    <ShowUserSummary
                        key={user.id}
                        user={user}
                        onDelete={handleClickDelete}
                    />
                ))}
            </ul>
        </div>
    );
}
