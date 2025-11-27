import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyInput from "./MyInput";

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

export default function FormWithFormikAndLib() {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form style={{ maxWidth: 480 }}>
                <MyInput label="Nom" name="nom" type="text"/>
                <MyInput label="Email" name="email" type="email"/>
                <MyInput label="Message" name="message" as="textarea" rows="5"/>
                <button type="submit">Envoyer</button>
            </Form>
        </Formik>
    );
}
