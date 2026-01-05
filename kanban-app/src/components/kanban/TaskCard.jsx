import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { STATUS_LABELS, STATUS_COLORS, TASK_STATUS } from '../../utils/constants';
import {ArrowLeftShort, ArrowRightShort, Calendar, Pencil, Trash} from "react-bootstrap-icons";

const TaskCard = ({ task, onDelete, onStatusChange }) => {
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
            onDelete(task.id);
        }
    };

    const handleStatusChange = (e, newStatus) => {
        e.stopPropagation();
        onStatusChange(task.id, newStatus);
    };

    const getNextStatus = () => {
        if (task.status === TASK_STATUS.TODO) return TASK_STATUS.IN_PROGRESS;
        if (task.status === TASK_STATUS.IN_PROGRESS) return TASK_STATUS.DONE;
        return null;
    };

    const getPrevStatus = () => {
        if (task.status === TASK_STATUS.DONE) return TASK_STATUS.IN_PROGRESS;
        if (task.status === TASK_STATUS.IN_PROGRESS) return TASK_STATUS.TODO;
        return null;
    };

    const nextStatus = getNextStatus();
    const prevStatus = getPrevStatus();

    return (
        <Card
            className="task-card fade-in"
            onClick={() => navigate(`/task/${task.id}`)}
        >
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0 h6">{task.title}</Card.Title>
                    <Badge bg={STATUS_COLORS[task.status]} className="status-badge">
                        {STATUS_LABELS[task.status]}
                    </Badge>
                </div>

                <Card.Text className="text-muted small mb-3">
                    {task.description.length > 100
                        ? `${task.description.substring(0, 100)}...`
                        : task.description}
                </Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted d-flex align-items-center">
                        <Calendar className="me-1" size={14} />
                        {formatDate(task.createdAt)}
                    </small>

                    <ButtonGroup size="sm" onClick={(e) => e.stopPropagation()}>
                        {prevStatus && (
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={(e) => handleStatusChange(e, prevStatus)}
                                title="Statut précédent"
                            >
                                <ArrowLeftShort size={16} />
                            </Button>
                        )}

                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/edit/${task.id}`);
                            }}
                            title="Modifier"
                        >
                            <Pencil size={16} />
                        </Button>

                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={handleDelete}
                            title="Supprimer"
                        >
                            <Trash size={16} />
                        </Button>

                        {nextStatus && (
                            <Button
                                variant="outline-secondary"
                                size="sm"
                                onClick={(e) => handleStatusChange(e, nextStatus)}
                                title="Statut suivant"
                            >
                                <ArrowRightShort size={16} />
                            </Button>
                        )}
                    </ButtonGroup>
                </div>
            </Card.Body>
        </Card>
    );
};

export default TaskCard;