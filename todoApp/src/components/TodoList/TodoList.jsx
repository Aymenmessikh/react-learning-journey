import TodoItem from "../TodoItem/TodoItem";
import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState(tasksList);

    return (
        <ul>
            {todos.map((task) => (
                <TodoItem key={task.id} item={task} />
            ))}
        </ul>
    );
}

const tasksList = [
    { id: 1, task: 'Learn React', status: 'incomplete' },
    { id: 2, task: 'Build a Todo App', status: 'incomplete' },
    { id: 3, task: 'Master JavaScript', status: 'incomplete' },
    { id: 4, task: 'Explore Node.js', status: 'complete' },
    { id: 5, task: 'Understand Databases', status: 'incomplete' },
    { id: 6, task: 'Deploy Applications', status: 'incomplete' },
    { id: 7, task: 'Learn TypeScript', status: 'complete' },
];

export default TodoList;
