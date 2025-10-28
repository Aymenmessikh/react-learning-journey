import './TodoItem.css';

function TodoItem({ item,onToggle,onDelete }) {
    return (
        <li className="todo-item">
            <label className={`checkbox-label ${item.status === 'complete' ? 'checked' : ''}`}>
                <input type="checkbox" checked={item.status === 'complete'}  onChange={() => {onToggle(item.id)}}/>
                <span className="custom-checkbox"></span>
                {item.task}
            </label>
            <button onClick={() => onDelete(item.id)}> delete </button>
        </li>
    );
}

export default TodoItem;
