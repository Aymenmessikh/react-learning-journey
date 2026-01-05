import { Container } from 'react-bootstrap';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Container fluid className="px-4">
                {children}
            </Container>
        </>
    );
};

export default Layout;