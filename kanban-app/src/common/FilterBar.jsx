import { Dropdown, Badge } from 'react-bootstrap';
import { Filter, FilterCircle, ListTask } from 'react-bootstrap-icons';

const FilterBar = ({ filterStatus, onFilterChange }) => {
    const statusOptions = [
        { id: '', label: 'Tous les statuts', badge: 'light' },
        { id: 'todo', label: 'À faire', badge: 'danger' },
        { id: 'inProgress', label: 'En cours', badge: 'warning' },
        { id: 'done', label: 'Terminé', badge: 'success' }
    ];

    const selectedStatus = statusOptions.find(opt => opt.id === filterStatus) || statusOptions[0];

    return (
        <div className="filter-bar">
            <div className="d-flex align-items-center justify-content-end">
                <FilterCircle size={20} className="text-primary me-2" />
                <span className="me-3 text-muted">Filtrer par :</span>
                <Dropdown>
                    <Dropdown.Toggle variant="light" className="filter-toggle d-flex align-items-center">
                        {filterStatus ? (
                            <>
                                <Badge bg={selectedStatus.badge} className="me-2">
                                    ●
                                </Badge>
                                {selectedStatus.label}
                            </>
                        ) : (
                            <>
                                <ListTask className="me-2" />
                                Tous les statuts
                            </>
                        )}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="shadow-sm border-0">
                        {statusOptions.map(option => (
                            <Dropdown.Item
                                key={option.id}
                                onClick={() => onFilterChange(option.id)}
                                className="d-flex align-items-center py-2"
                                active={filterStatus === option.id}
                            >
                                {option.id ? (
                                    <Badge bg={option.badge} className="me-2">
                                        ●
                                    </Badge>
                                ) : (
                                    <ListTask className="me-2" />
                                )}
                                {option.label}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
};

export default FilterBar;