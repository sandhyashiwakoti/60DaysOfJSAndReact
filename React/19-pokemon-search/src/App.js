import { useState } from "react";
import PokemonDisplay from "./components/PokemonDisplay";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async (pokemonName) => {
    if (!pokemonName) return;

    setIsLoading(true);
    setError(null);
    setPokemonData(null);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokémon not found. Check the spelling!");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPokemon(searchTerm);
  };

  return (
    <div className="pokedex">
      <h1>Pokédex</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Pokémon name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <PokemonDisplay data={pokemonData} isLoading={isLoading} error={error} />
    </div>
  );
}

// Inline styles for the App component
const styles = `
  .pokedex {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 90%;
    max-width: 450px;
    text-align: center;
  }
  .pokedex h1 {
    margin: 0 0 20px 0;
  }
  .pokedex form {
    display: flex;
    gap: 10px;
  }
  .pokedex input {
    flex-grow: 1;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .pokedex button {
    background-color: #3b4cca;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

function StyledApp() {
  return (
    <>
      <style>{styles}</style>
      <App />
    </>
  );
}

export default StyledApp;
