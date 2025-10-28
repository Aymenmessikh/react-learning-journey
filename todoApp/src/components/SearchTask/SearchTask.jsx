import './SearchTask.css';
function TaskSearch({ searchTerm, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Search tasks..."
            className="search-task-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
        />
    );
}
export default TaskSearch;