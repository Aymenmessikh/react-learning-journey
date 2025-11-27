import React from "react";

export default function FormHtml() {
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const nom = formData.get("nom");
        const email = formData.get("email");
        const message = formData.get("message");

        alert(`Nom: ${nom}\nEmail: ${email}\nMessage: ${message}`);
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
            <div style={{ marginBottom: 12 }}>
                <label htmlFor="nom">Nom *</label><br />
                <input id="nom" name="nom" type="text" required />
            </div>

            <div style={{ marginBottom: 12 }}>
                <label htmlFor="email">Email *</label><br />
                <input id="email" name="email" type="email" required />
            </div>

            <div style={{ marginBottom: 12 }}>
                <label htmlFor="message">Message</label><br />
                <textarea id="message" name="message" rows="5" />
            </div>

            <button type="submit">Envoyer</button>
        </form>
    );
}
