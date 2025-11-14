import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router";

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="w-100">
            <Container fluid>
                <Navbar.Brand>Header</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
                    <Nav.Link as={NavLink} to="/posts">Posts</Nav.Link>
                    <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
