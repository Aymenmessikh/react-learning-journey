export const TASK_STATUS = {
    TODO: 'todo',
    IN_PROGRESS: 'inProgress',
    DONE: 'done'
};
export const STATUS_LABELS = {
    [TASK_STATUS.TODO]: 'À faire',
    [TASK_STATUS.IN_PROGRESS]: 'En cours',
    [TASK_STATUS.DONE]: 'Terminé'
};
export const STATUS_COLORS = {
    [TASK_STATUS.TODO]: 'secondary',
    [TASK_STATUS.IN_PROGRESS]: 'warning',
    [TASK_STATUS.DONE]: 'success'
};
export const COLUMNS = [
    {
        id: TASK_STATUS.TODO,
        title: STATUS_LABELS[TASK_STATUS.TODO],
        color: 'secondary'
    },
    {
        id: TASK_STATUS.IN_PROGRESS,
        title: STATUS_LABELS[TASK_STATUS.IN_PROGRESS],
        color: 'warning'
    },
    {
        id: TASK_STATUS.DONE,
        title: STATUS_LABELS[TASK_STATUS.DONE],
        color: 'success'
    }
];