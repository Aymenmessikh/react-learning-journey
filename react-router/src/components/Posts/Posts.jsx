import React from "react";
import {Card} from "react-bootstrap";
import {useNavigate} from "react-router";

function Posts() {

    const navigate = useNavigate();

    const posts = [
        {
            id: 1,
            title: "Introduction à React",
            content: "React est une bibliothèque JavaScript permettant de construire des interfaces utilisateur."
        },
        {
            id: 2,
            title: "React Router",
            content: "React Router permet de gérer la navigation dans une application React Single Page."
        },
    ];
    const handleClick = (id) => {
        navigate(`/posts/${id}`);
    };
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Liste des articles</h2>
            {posts.map((post) => (
                <Card key={post.id} className="mb-3" onClick={() => handleClick(post.id)} style={{ cursor: "pointer" }}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Posts;
