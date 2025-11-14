import React from "react";
import { useParams } from "react-router";

function Comments() {
    const { id } = useParams();
    const commentsData = {
        1: [
            { id: 1, text: "Très bon article sur React !" },
            { id: 2, text: "Merci pour l'introduction." },
        ],
        2: [
            { id: 1, text: "React Router est génial !" },
            { id: 2, text: "Très utile pour SPA." },
        ],
    };

    const comments = commentsData[id] || [];
    if (comments.length === 0) {
        return <p className="mt-3">Aucun commentaire pour cet article.</p>;
    }

    return (
        <div className="mt-3">
            <h5>Commentaires</h5>
            <ul>
                {comments.map((c) => (
                    <li key={c.id}>{c.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
