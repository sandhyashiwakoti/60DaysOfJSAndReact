import { useTheme } from "../context/ThemeContext";

function PageContent() {
  const { theme } = useTheme(); // Consume the context

  const contentStyle = {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: theme === "light" ? "#f8f9fa" : "#495057",
    color: theme === "light" ? "#212529" : "#f8f9fa",
    border: "1px solid #dee2e6",
  };

  return (
    <main style={contentStyle}>
      <h2>Current Theme: {theme}</h2>
      <p>
        This content area and the header above both use the same global theme
        state, but neither of them received any props from the App component!
      </p>
    </main>
  );
}

export default PageContent;
