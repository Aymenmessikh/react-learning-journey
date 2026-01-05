import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';
import TaskForm from '../components/tasks/TaskForm';
import { useTasks } from '../hooks/useTasks';

const NewTask = () => {
    const navigate = useNavigate();
    const { addTask } = useTasks();
    const [error, setError] = useState(null);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            setError(null);
            await addTask(values);
            navigate('/');
        } catch (err) {
            setError('Erreur lors de la création de la tâche');
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <Card className="fade-in">
                    <Card.Header className="bg-primary text-white">
                        <h4 className="mb-0">Créer une nouvelle tâche</h4>
                    </Card.Header>
                    <Card.Body>
                        {error && (
                            <Alert variant="danger" onClose={() => setError(null)} dismissible>
                                {error}
                            </Alert>
                        )}
                        <TaskForm
                            onSubmit={handleSubmit}
                            onCancel={handleCancel}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default NewTask;