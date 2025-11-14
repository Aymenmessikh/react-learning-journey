import React from "react";
import { Link } from "react-router";

function NotFound() {
    return (
        <div className="container mt-5 text-center">
            <h1>404</h1>
            <h3>Page non trouvée</h3>
            <p>La page que vous recherchez n'existe pas.</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default NotFound;
