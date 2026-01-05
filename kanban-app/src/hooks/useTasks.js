import { useState, useEffect } from 'react';
import * as api from '../services/api';

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await api.getTasks();
            setTasks(data);
        } catch (err) {
            setError('Erreur lors du chargement des tâches');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const addTask = async (taskData) => {
        try {
            const newTask = await api.createTask(taskData);
            setTasks([...tasks, newTask]);
            return newTask;
        } catch (err) {
            setError('Erreur lors de la création de la tâche');
            throw err;
        }
    };

    const modifyTask = async (id, taskData) => {
        try {
            const updatedTask = await api.updateTask(id, taskData);
            setTasks(tasks.map(task => task.id === id ? updatedTask : task));
            return updatedTask;
        } catch (err) {
            setError('Erreur lors de la modification de la tâche');
            throw err;
        }
    };

    const removeTask = async (id) => {
        try {
            await api.deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            setError('Erreur lors de la suppression de la tâche');
            throw err;
        }
    };

    const changeTaskStatus = async (id, newStatus) => {
        try {
            const task = tasks.find(t => t.id === id);
            if (task) {
                const updatedTask = await api.updateTask(id, { ...task, status: newStatus });
                setTasks(tasks.map(t => t.id === id ? updatedTask : t));
            }
        } catch (err) {
            setError('Erreur lors du changement de statut');
            throw err;
        }
    };

    return {
        tasks,
        loading,
        error,
        loadTasks,
        addTask,
        modifyTask,
        removeTask,
        changeTaskStatus
    };
};