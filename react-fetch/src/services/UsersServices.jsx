import { useEffect, useState } from "react";
export function useGetAllUsers(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Erreur");
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, [url]);

    return { data, loading, error };
}
export function useGetUserById(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                if (!response.ok) throw new Error("Erreur");
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [id]);

    return { data, loading, error };
}

export function useGetUserByIdOrCreate(id) {
    const isCreate = id === "create";
    const { data, loading, error } = useGetUserById(id);

    if (isCreate) {
        return {
            data: { id: "", name: "", firstname: "", email: "" },
            loading: false,
            error: null,
        };
    }

    return { data, loading, error };
}
export async function doCreateOrUpdateUser(user, setMessage) {
    const hasId = !!user.id;

    const url = hasId
        ? `https://jsonplaceholder.typicode.com/users/${user.id}`
        : `https://jsonplaceholder.typicode.com/users`;

    const method = hasId ? "PUT" : "POST";

    try {
        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });

        const result = await res.json();

        setMessage(
            hasId
                ? "Utilisateur modifié avec succès"
                : "Utilisateur créé avec succès"
        );

        return result;
    } catch (err) {
        setMessage("Erreur : " + err.message);
    }
}
