const API_URL = 'http://localhost:3001/tasks';

export const getTasks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des tâches');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur getTasks :', error);
        throw error;
    }
};

export const createTask = async (taskData) => {
    try {
        const newTask = {
            ...taskData,
            createdAt: new Date().toISOString()
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la création de la tâche');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur createTask:', error);
        throw error;
    }
};

export const getTaskById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Tâche non trouvée');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur getTaskById:', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la suppression de la tâche');
        }
        return true;
    } catch (error) {
        console.error('Erreur deleteTask:', error);
        throw error;
    }
};
export const updateTask = async (id, taskData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour de la tâche');
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur updateTask:', error);
        throw error;
    }
};