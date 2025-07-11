import { useState } from "react";

function App() {
  // Store the list of to-do items in state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn about rendering lists" },
    { id: 2, text: "Understand the key prop" },
  ]);

  // Store the value of the new to-do input field
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Don't add an empty to-do
    if (newTodo.trim() === "") return;

    // Create a new to-do object
    const newTodoItem = {
      id: Date.now(), // A simple way to generate a unique ID
      text: newTodo,
    };

    // Update the todos state immutably
    setTodos([...todos, newTodoItem]);

    // Clear the input field
    setNewTodo("");
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
