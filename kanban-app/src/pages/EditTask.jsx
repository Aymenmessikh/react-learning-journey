import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';
import TaskForm from '../components/tasks/TaskForm';
import { useTasks } from '../hooks/useTasks';
import { getTaskById } from '../services/api';
import Loading from "../common/Loading.jsx";

const EditTask = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { modifyTask } = useTasks();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTask();
    }, [id]);

    const loadTask = async () => {
        try {
            setLoading(true);
            const data = await getTaskById(id);
            setTask(data);
        } catch (err) {
            setError('Tâche non trouvée');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setError(null);
            await modifyTask(id, values);
            navigate('/');
        } catch (err) {
            setError('Erreur lors de la modification de la tâche');
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    if (loading) {
        return <Loading message="Chargement de la tâche..." />;
    }

    if (error || !task) {
        return (
            <Alert variant="danger">
                <Alert.Heading>Erreur</Alert.Heading>
                <p>{error || 'Tâche non trouvée'}</p>
            </Alert>
        );
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <Card className="fade-in">
                    <Card.Header className="bg-warning text-dark">
                        <h4 className="mb-0">Modifier la tâche</h4>
                    </Card.Header>
                    <Card.Body>
                        <TaskForm
                            initialValues={task}
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                            isEdit={true}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default EditTask;