import { Form, InputGroup, Button } from 'react-bootstrap';
import { Search, X } from 'react-bootstrap-icons';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar-wrapper">
            <InputGroup className="search-input-group shadow-sm">
                <InputGroup.Text className="bg-white border-end-0 ps-3">
                    <Search size={20} className="text-secondary" />
                </InputGroup.Text>
                <Form.Control
                    type="text"
                    placeholder="Rechercher une tâche par titre ou description..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="border-start-0 border-end-0 py-3"
                />
                {searchTerm && (
                    <Button
                        variant="light"
                        className="border-start-0"
                        onClick={() => onSearchChange('')}
                    >
                        <X size={20} />
                    </Button>
                )}
            </InputGroup>
        </div>
    );
};

export default SearchBar;