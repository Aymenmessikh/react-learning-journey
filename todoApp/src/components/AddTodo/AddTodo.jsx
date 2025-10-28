import {useState} from "react";

function AddTodo({onAdd}) {
    const [todo, setTodo] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();
        onAdd(todo);
        setTodo('');
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <input type="text" name="task"
                       placeholder="New Task" required
                       value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}

export default AddTodo;