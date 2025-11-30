import React from "react";
import { Formik, Form, Field } from "formik";

export default function CreateUser() {
    async function handleSubmit(values, { resetForm }) {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            const result = await response.json();
            alert("Utilisateur cree : " + JSON.stringify(result, null, 2));

            resetForm();
        } catch (error) {
            alert("Erreur : " + error.message);
        }
    }

    return (
        <div>
            <h2>Créer un utilisateur</h2>

            <Formik
                initialValues={{
                    name: "",
                    firstname: "",
                    email: "",
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

                    <button type="submit">Créer</button>
                </Form>
            </Formik>
        </div>
    );
}
