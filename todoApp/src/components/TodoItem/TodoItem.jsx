import './TodoItem.css';

function TodoItem({ item,onToggle }) {
    return (
        <li className="todo-item">
            <label className={`checkbox-label ${item.status === 'complete' ? 'checked' : ''}`}>
                <input type="checkbox" checked={item.status === 'complete'}  onChange={() => {onToggle(item.id)}}/>
                <span className="custom-checkbox"></span>
                {item.task}
            </label>
            <button>Delete</button>
        </li>
    );
}

export default TodoItem;
