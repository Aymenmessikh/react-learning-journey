import React from "react";
import { Formik, Form, Field } from "formik";
import { useGetUserById } from "../services/UsersServices";

export default function EditUserDetailsById({ id }) {
    const { data: user, loading, error } = useGetUserById(id);

    async function handleSubmit(values) {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(values),
                }
            );

            const result = await response.json();
            alert("Utilisateur modifie : " + JSON.stringify(result, null, 2));
        } catch (err) {
            alert("Erreur : " + err.message);
        }
    }
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h2>Modifier l’utilisateur #{id}</h2>

            <Formik
                enableReinitialize
                initialValues={{
                    name: user.name || "",
                    firstname: user.username || "",
                    email: user.email || "",
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label>Nom</label>
                        <Field name="name" type="text" />
                    </div>

                    <div>
                        <label>Prénom</label>
                        <Field name="firstname" type="text" />
                    </div>

                    <div>
                        <label>Email</label>
                        <Field name="email" type="email" />
                    </div>

                    <button type="submit">Modifier</button>
                </Form>
            </Formik>
        </div>
    );
}
