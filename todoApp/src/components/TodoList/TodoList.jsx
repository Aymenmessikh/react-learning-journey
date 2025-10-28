import TodoItem from "../TodoItem/TodoItem";
import {useState} from "react";
import AddTodo from "../AddTodo/AddTodo.jsx";

function TodoList() {
    const [todos, setTodos] = useState(tasksList);

    const toggleStatus = (id) => {
        const updatedTodos = todos.map((task) => {
            if (task.id === id) {
                return {
                    ...task,
                    status: task.status === 'complete' ? 'incomplete' : 'complete',
                };
            }
            return task;
        });
        console.log(updatedTodos);
        setTodos(updatedTodos);
    };
    const deleteTask = (id) => {
        const filteredTodos = todos.filter((task) => task.id !== id);
        setTodos(filteredTodos);
    };
    const addTodo = (newTask) => {
        const lastId = todos[todos.length - 1]?.id || 0;
        const newTodo = {
            id: lastId + 1,
            task: newTask,
            status: "incomplete",
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <>
            <AddTodo onAdd={addTodo}></AddTodo>
            <ul>
                {todos.map((task) => (
                    <TodoItem key={task.id} item={task}
                              onToggle={toggleStatus}
                              onDelete={deleteTask}/>
                ))}
            </ul>
        </>
    );
}

const tasksList = [
    {id: 1, task: 'Learn React', status: 'incomplete'},
    {id: 2, task: 'Build a Todo App', status: 'incomplete'},
    {id: 3, task: 'Master JavaScript', status: 'incomplete'},
    {id: 4, task: 'Explore Node.js', status: 'complete'},
    {id: 5, task: 'Understand Databases', status: 'incomplete'},
    {id: 6, task: 'Deploy Applications', status: 'incomplete'},
    {id: 7, task: 'Learn TypeScript', status: 'complete'},
];

export default TodoList;
