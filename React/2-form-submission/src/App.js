import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}! Your form has been submitted.`);
    setName("");
  };

  return (
    <div className="container">
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          type="text"
          id="name-input"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
