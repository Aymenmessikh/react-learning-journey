import React from "react";
import { Field, ErrorMessage } from "formik";

export default function MyInput({ label, name, as = "input", type = "text", ...props }) {
    return (
        <div style={{ marginBottom: 12 }}>
            <label htmlFor={name}>{label}</label><br />
            <Field id={name} name={name} type={type} as={as}{...props}/>
            <ErrorMessage name={name} component="div" style={{ color: "red", fontSize: 14 }}/>
        </div>
    );
}
