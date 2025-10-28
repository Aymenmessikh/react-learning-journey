import {useState} from "react";
import './AddTodo.css';

function AddTodo({onAdd}) {
    const [todo, setTodo] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        onAdd(todo);
        setTodo('');
    }
    return (
        <>
            <form onSubmit={handelSubmit} className="add-todo-form">
                <input type="text" name="task"
                       placeholder="New Task" required
                       className="add-todo-input"
                       value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit"  className="add-todo-button">Add Task</button>
            </form>
        </>
    );
}

export default AddTodo;