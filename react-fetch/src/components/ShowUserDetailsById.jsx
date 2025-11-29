import React, { useEffect, useState } from "react";

export default function ShowUserDetailsById({ id }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadUser() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/users/${id}`
                );

                if (!response.ok) {
                    throw new Error("Erreur réseau !");
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadUser();
    }, [id]);

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    if (!user) return <p>Aucun utilisateur trouvé</p>;

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
