import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
    nom: "",
    email: "",
    message: "",
};

const validationSchema = Yup.object({
    nom: Yup.string().required("Le nom est obligatoire"),
    email: Yup.string().email("Email invalide").required("L'email est obligatoire"),
    message: Yup.string().min(5, "Le message doit contenir au moins 5 caractères"),
});

function handleSubmit(values) {
    alert(`Nom: ${values.nom}\nEmail: ${values.email}\nMessage: ${values.message}`);
}

export default function FormWithFormikAndYup() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form style={{ maxWidth: 480 }}>
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="nom">Nom</label><br />
                    <Field id="nom" name="nom" type="text" />
                    <ErrorMessage name="nom" component="div" style={{ color: "red", fontSize: 14 }}/>
                </div>

                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="email">Email</label><br />
                    <Field id="email" name="email" type="email" />
                    <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: 14 }}
                    />
                </div>
                <div style={{ marginBottom: 12 }}>
                    <label htmlFor="message">Message</label><br />
                    <Field id="message" name="message" as="textarea" rows="5" />
                    <ErrorMessage name="message" component="div" style={{ color: "red", fontSize: 14 }}/>
                </div>
                <button type="submit">Envoyer</button>
            </Form>
        </Formik>
    );
}
