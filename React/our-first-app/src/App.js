import { useState } from "react"; // 1. Import the useState hook from React

function App() {
  // 2. Call useState to create a state variable.
  //    It returns an array with two things: the current state and a function to update it.
  //    We use array destructuring to get them into variables.
  //    `0` is the initial value for our state.
  const [count, setCount] = useState(0);

  // 3. This function will now correctly update the state.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Working with State</h1>
      {/* 4. The UI now reads directly from our state variable. */}
      <p>You have clicked the button {count} times.</p>

      {/* 5. The button click triggers the state update. */}
      <button onClick={handleIncrement}>Click to Increment</button>
    </div>
  );
}

export default App;
