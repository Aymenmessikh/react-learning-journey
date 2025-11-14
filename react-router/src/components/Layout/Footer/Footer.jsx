import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" className="w-100 mt-auto">
            <Container fluid>
                <Navbar.Brand href="#home">Footer</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Footer;