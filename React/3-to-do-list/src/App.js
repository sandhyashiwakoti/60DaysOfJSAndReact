import { useState, useRef } from "react"; // Import useRef for focus management

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React State" },
    { id: 2, text: "Build a To-Do List" },
    { id: 3, text: "Add Delete Functionality" },
  ]);

  const [newTodo, setNewTodo] = useState("");
  // New state to hold error messages
  const [error, setError] = useState("");
  // Create a ref to manage the input element
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
    // Clear error message as soon as the user starts typing
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Show an error if the input is empty
    if (newTodo.trim() === "") {
      setError("To-do text cannot be empty.");
      return;
    }

    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
    // Focus the input field for the next entry
    inputRef.current.focus();
  };

  const handleDelete = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-group">
          <input
            ref={inputRef} // Attach the ref to the input
            type="text"
            placeholder="Add a new to-do"
            value={newTodo}
            onChange={handleInputChange}
            // Add a dynamic class for the error state
            className={error ? "input-error" : ""}
          />
          <button type="submit">Add</button>
        </form>
        {/* Conditionally render the error message */}
        <p className="error-text">{error}</p>
      </div>

      {/* Conditionally render either the list or the empty message */}
      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className="todo-text">{todo.text}</span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No to-dos yet. Add one above!</p>
      )}
    </div>
  );
}

export default App;
