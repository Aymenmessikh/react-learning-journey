import { Spinner } from 'react-bootstrap';

const Loading = ({ message = 'Chargement...' }) => {
    return (
        <div className="loading-container">
            <div className="text-center">
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Chargement...</span>
                </Spinner>
                <p className="mt-3 text-muted">{message}</p>
            </div>
        </div>
    );
};

export default Loading;