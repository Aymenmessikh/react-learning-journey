import { useState, useEffect } from "react";

export function useGetAllUsers(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Erreur réseau !");
                }

                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadUsers();
    }, [url]);

    return { data, loading, error };
}
