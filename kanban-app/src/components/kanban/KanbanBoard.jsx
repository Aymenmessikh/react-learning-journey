import { useState, useMemo } from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import KanbanColumn from './KanbanColumn';
import { COLUMNS } from '../../utils/constants';
import Loading from "../../common/Loading.jsx";
import {useTasks} from "../../hooks/useTasks.js";
import SearchBar from "../../common/SearchBar.jsx";
import FilterBar from "../../common/FilterBar.jsx";
import { ColumnsGap } from 'react-bootstrap-icons';

const KanbanBoard = () => {
    const { tasks, loading, error, removeTask, changeTaskStatus } = useTasks();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('');

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                task.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = !filterStatus || task.status === filterStatus;
            return matchesSearch && matchesFilter;
        });
    }, [tasks, searchTerm, filterStatus]);

    const getTasksByStatus = (status) => {
        return filteredTasks.filter(task => task.status === status);
    };

    if (loading) {
        return <Loading message="Chargement des tâches..." />;
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">
                    <Alert.Heading>Erreur</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container fluid className="kanban-container p-0">
            <div className="kanban-header bg-white shadow-sm border-bottom p-4">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12} className="text-center mb-4">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <ColumnsGap size={32} className="text-primary me-3" />
                                <h1 className="display-6 fw-bold mb-0">Tableau Kanban</h1>
                            </div>
                            <p className="text-muted mb-0">
                                {tasks.length} tâche{tasks.length > 1 ? 's' : ''} au total
                            </p>
                        </Col>

                        <Col lg={8} className="mx-auto">
                            <SearchBar
                                searchTerm={searchTerm}
                                onSearchChange={setSearchTerm}
                            />
                        </Col>

                        <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
                            <FilterBar
                                filterStatus={filterStatus}
                                onFilterChange={setFilterStatus}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="kanban-main-content">
                <div className="kanban-board-container d-flex justify-content-center">
                    <div className="kanban-board">
                        {COLUMNS.map(column => (
                            <KanbanColumn
                                key={column.id}
                                column={column}
                                tasks={getTasksByStatus(column.id)}
                                onDelete={removeTask}
                                onStatusChange={changeTaskStatus}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default KanbanBoard;