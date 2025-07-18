import { useState, useReducer } from "react";

// Define action types as constants to avoid typos
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// This is our reducer function. It handles all state updates.
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { id: Date.now(), text: action.payload.text, isCompleted: false },
      ];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function App() {
  // We now use useReducer instead of multiple useStates for the todos
  const [todos, dispatch] = useReducer(reducer, []);
  const [newTodoText, setNewTodoText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodoText.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: { text: newTodoText } });
    setNewTodoText("");
  };

  return (
    <div className="container">
      <h1>To-Do List with `useReducer`</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new to-do"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span
              className={todo.isCompleted ? "todo-text completed" : "todo-text"}
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              {todo.text}
            </span>
            <button
              className="delete-btn"
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
