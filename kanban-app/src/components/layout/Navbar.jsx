import { Navbar as BootstrapNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <BootstrapNavbar bg="primary" variant="dark" expand="lg" className="mb-4">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">
                     Kanban App
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Tableau Kanban
                        </Nav.Link>
                    </Nav>
                    <Button
                        variant="light"
                        size="sm"
                        onClick={() => navigate('/new')}
                    >
                        + Nouvelle tâche
                    </Button>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;