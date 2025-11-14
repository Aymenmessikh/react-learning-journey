import React from "react";
import {Link, Outlet, useParams} from "react-router";
import { Card } from "react-bootstrap";

function PostDetail() {
    const { id } = useParams();
    const posts = [
        { id: 1, title: "Introduction à React", content: "React est une bibliothèque JavaScript permettant de construire des interfaces utilisateur." },
        { id: 2, title: "React Router", content: "React Router permet de gérer la navigation dans une application React Single Page." },
    ];

    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="container mt-4">
                <h2>Article non trouvé</h2>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.content}</Card.Text>
                    <Link to="comments">Commentaires</Link>
                    <Outlet />
                </Card.Body>
            </Card>
        </div>
    );
}

export default PostDetail;
