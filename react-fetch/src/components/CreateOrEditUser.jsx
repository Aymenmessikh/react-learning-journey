import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import {useGetUserByIdOrCreate, doCreateOrUpdateUser,} from "../services/UsersServices";

export default function CreateOrEditUser() {
    const { id } = useParams();
    const { data: user, loading, error } = useGetUserByIdOrCreate(id);

    const [message, setMessage] = useState("");

    if (loading) return <p>Chargement…</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h2>{id === "create" ? "Créer un utilisateur" : `Modifier #${id}`}</h2>

            <p style={{ color: "green" }}>{message}</p>

            <Formik
                enableReinitialize
                initialValues={{
                    id: user.id || "",
                    name: user.name || "",
                    firstname: user.username || "",
                    email: user.email || "",
                }}
                onSubmit={async (values) => {
                    await doCreateOrUpdateUser(values, setMessage);
                }}
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

                    <button type="submit">
                        {id === "create" ? "Créer" : "Modifier"}
                    </button>
                </Form>
            </Formik>
        </div>
    );
}
