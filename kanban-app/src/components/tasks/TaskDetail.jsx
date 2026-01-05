import { Card, Badge, Button, ButtonGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { STATUS_LABELS, STATUS_COLORS } from '../../utils/constants';
import {
    PencilFill,
    TrashFill,
    ArrowLeft,
    Calendar,
    FileText,
    InfoCircle,
    Tag
} from 'react-bootstrap-icons';

const TaskDetail = ({ task, onDelete }) => {
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDelete = () => {
        if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
            onDelete(task.id);
            navigate('/');
        }
    };

    return (
        <Card className="fade-in">
            <Card.Header className="bg-primary text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <FileText className="me-2" size={24} />
                        <h4 className="mb-0">Détails de la tâche</h4>
                    </div>
                    <Badge bg={STATUS_COLORS[task.status]} className="d-flex align-items-center">
                        <Tag className="me-1" size={12} />
                        {STATUS_LABELS[task.status]}
                    </Badge>
                </div>
            </Card.Header>
            <Card.Body>
                <div className="mb-4">
                    <h5 className="text-muted mb-2 d-flex align-items-center">
                        <FileText className="me-2" size={18} />
                        Titre
                    </h5>
                    <h3>{task.title}</h3>
                </div>

                <div className="mb-4">
                    <h5 className="text-muted mb-2 d-flex align-items-center">
                        <FileText className="me-2" size={18} />
                        Description
                    </h5>
                    <p className="lead">{task.description}</p>
                </div>

                <div className="mb-4">
                    <h5 className="text-muted mb-2 d-flex align-items-center">
                        <InfoCircle className="me-2" size={18} />
                        Informations
                    </h5>
                    <div className="mb-2 d-flex align-items-center">
                        <strong className="me-2">Statut :</strong>
                        <Badge bg={STATUS_COLORS[task.status]} className="d-flex align-items-center">
                            <Tag className="me-1" size={12} />
                            {STATUS_LABELS[task.status]}
                        </Badge>
                    </div>
                    <p className="d-flex align-items-center">
                        <Calendar className="me-2" size={16} />
                        <strong className="me-2">Date de création :</strong>
                        {formatDate(task.createdAt)}
                    </p>
                    <p>
                        <strong>ID :</strong> {task.id}
                    </p>
                </div>

                <ButtonGroup>
                    <Button
                        variant="primary"
                        onClick={() => navigate(`/edit/${task.id}`)}
                        className="d-flex align-items-center"
                    >
                        <PencilFill className="me-2" />
                        Modifier
                    </Button>
                    <Button
                        variant="danger"
                        onClick={handleDelete}
                        className="d-flex align-items-center"
                    >
                        <TrashFill className="me-2" />
                        Supprimer
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => navigate('/')}
                        className="d-flex align-items-center"
                    >
                        <ArrowLeft className="me-2" />
                        Retour
                    </Button>
                </ButtonGroup>
            </Card.Body>
        </Card>
    );
};

export default TaskDetail;