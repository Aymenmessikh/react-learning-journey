import { Badge } from 'react-bootstrap';
import TaskCard from './TaskCard';
import {
    ListTask,
    CheckCircle,
    ArrowRightCircle,
    Circle
} from 'react-bootstrap-icons';
import './KanbanBoard.css'
const KanbanColumn = ({ column, tasks, onDelete, onStatusChange }) => {
    const getStatusIcon = (statusId) => {
        switch(statusId) {
            case 'todo': return <Circle className="me-1" size={14} />;
            case 'inProgress': return <ArrowRightCircle className="me-1" size={14} />;
            case 'done': return <CheckCircle className="me-1" size={14} />;
            default: return <ListTask className="me-1" size={14} />;
        }
    };

    return (
        <div className="kanban-column h-100 d-flex flex-column">
            <div className="kanban-column-header d-flex justify-content-between align-items-center p-3 mb-3 rounded-top">
                <div className="d-flex align-items-center">
                    {getStatusIcon(column.id)}
                    <h5 className="mb-0 fw-semibold">{column.title}</h5>
                </div>
                <Badge bg={column.color} pill className="px-3 py-2">
                    {tasks.length}
                </Badge>
            </div>

            <div className="kanban-column-content flex-grow-1 overflow-auto p-3">
                {tasks.length === 0 ? (
                    <div className="text-center text-muted py-5">
                        <div className="mb-3">
                            <ListTask size={48} opacity={0.3} />
                        </div>
                        <p className="mb-0">Aucune tâche</p>
                        <small className="text-muted">Glissez une tâche ici</small>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3">
                        {tasks.map(task => (
                            <TaskCard
                                key={task.id}
                                task={task}
                                onDelete={onDelete}
                                onStatusChange={onStatusChange}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default KanbanColumn;