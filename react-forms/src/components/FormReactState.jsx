import React, { useState } from "react";

export default function FormReactState() {
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
    };

    return (
        <form style={{ maxWidth: 480 }}>
            <div style={{ marginBottom: 12 }}>
                <label htmlFor="nom">Nom</label><br />
                <input id="nom" type="text" value={nom} onChange={(e) => setNom(e.target.value)}/>
            </div>

            <div style={{ marginBottom: 12 }}>
                <label htmlFor="email">Email</label><br />
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div style={{ marginBottom: 12 }}>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button type="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    );
}
