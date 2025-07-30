import Header from "./components/Header";
import PageContent from "./components/PageContent";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme(); // Get the theme to apply to the main wrapper

  return (
    // The className is updated dynamically based on the theme
    <div className={`app-container ${theme}`}>
      <Header />
      <PageContent />
    </div>
  );
}

export default App;
