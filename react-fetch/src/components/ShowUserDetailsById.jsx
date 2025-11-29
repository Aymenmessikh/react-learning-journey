import React from "react";
import { useGetUserById } from "../services/UsersServices";

export default function ShowUserDetailsById({ id }) {
    const { data: user, loading, error } = useGetUserById(id);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
    if (!user) return <p>Aucun utilisateur trouvé.</p>;

    return (
        <div>
            <h2>Détails de l'utilisateur #{id}</h2>

            <p><strong>Name :</strong> {user.name}</p>
            <p><strong>Username :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Phone :</strong> {user.phone}</p>
            <p><strong>Website :</strong> {user.website}</p>
        </div>
    );
}
