import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
    nom: "",
    email: "",
    message: "",
};

function handleSubmit(values) {
    alert(`Nom: ${values.nom}\nEmail: ${values.email}\nMessage: ${values.message}`);
}

export default function FormWithFormik() {
    return (
        <Formik initialValues={initialValues}
                onSubmit={handleSubmit}>
                <Form style={{ maxWidth: 480 }}>
                    <div style={{ marginBottom: 12 }}>
                        <label htmlFor="nom">Nom</label><br />
                        <Field id="nom" name="nom" type="text" />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                        <label htmlFor="email">Email</label><br />
                        <Field id="email" name="email" type="email" />
                    </div>

                    <div style={{ marginBottom: 12 }}>
                        <label htmlFor="message">Message</label><br />
                        <Field id="message" name="message" as="textarea" rows="5" />
                    </div>

                    <button type="submit">Envoyer</button>
                </Form>
        </Formik>
    );
}
