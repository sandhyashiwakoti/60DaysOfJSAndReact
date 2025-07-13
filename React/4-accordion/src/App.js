import { useState } from "react";

// The data for our accordion
const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
  },
  {
    id: 2,
    title: "What is a component?",
    content:
      "Components are the heart of React. They are independent and reusable bits of code that serve the same purpose as JavaScript functions, but work in isolation and return HTML.",
  },
  {
    id: 3,
    title: "What is state in React?",
    content:
      "The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.",
  },
];

function App() {
  // State to keep track of the currently open accordion item's ID
  const [activeId, setActiveId] = useState(null);

  // This function handles the click on an accordion title
  const handleTitleClick = (id) => {
    // If the clicked item is already active, close it. Otherwise, open it.
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container">
      <h1>React Accordion</h1>
      <div className="accordion">
        {accordionData.map((item) => {
          // Check if the current item is the active one
          const isActive = item.id === activeId;

          return (
            <div key={item.id} className="accordion-item">
              <div
                className="accordion-title"
                onClick={() => handleTitleClick(item.id)}
              >
                <h2>{item.title}</h2>
                <span>{isActive ? "-" : "+"}</span>
              </div>
              {/* Conditionally render the content */}
              {isActive && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
