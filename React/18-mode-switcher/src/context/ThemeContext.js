import { createContext, useState, useContext } from "react";

// 1. Create the context object
const ThemeContext = createContext();

// 2. Create the Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // The value prop is where we pass the state and the function to update it
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// 3. Create a custom hook to make consuming the context easier
export function useTheme() {
  return useContext(ThemeContext);
}
