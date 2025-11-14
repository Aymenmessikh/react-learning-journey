import React from "react";
import { Card } from "react-bootstrap";

function Posts() {
    const posts = [
        { id: 1, title: "Introduction à React", content: "React est une bibliothèque JavaScript permettant de construire des interfaces utilisateur." },
        { id: 2, title: "React Router", content: "React Router permet de gérer la navigation dans une application React Single Page." },
    ];

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Liste des articles</h2>
            {posts.map((post) => (
                <Card key={post.id} className="mb-3">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Posts;
