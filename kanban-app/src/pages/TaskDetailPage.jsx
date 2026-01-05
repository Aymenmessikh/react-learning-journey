import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useTasks } from '../hooks/useTasks';
import { getTaskById } from '../services/api';
import TaskDetail from "../components/tasks/TaskDetail.jsx";
import Loading from "../common/Loading.jsx";

const TaskDetailPage = () => {
    const { id } = useParams();
    const { removeTask } = useTasks();
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
                <TaskDetail
                    task={task}
                    onDelete={removeTask}
                />
            </div>
        </div>
    );
};

export default TaskDetailPage;