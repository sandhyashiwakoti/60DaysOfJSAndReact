import styles from "./PokemonDisplay.module.css";

// Helper to get a color based on Pokémon type
const getTypeColor = (type) => {
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ghost: "#705898",
    ice: "#98d8d8",
    dark: "#705848",
    steel: "#b8b8d0",
  };
  return { backgroundColor: colors[type] || "#A8A77A", color: "#333" };
};

function PokemonDisplay({ data, isLoading, error }) {
  if (isLoading) {
    return (
      <div className={styles.displayContainer}>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.displayContainer}>
        <p className={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  // Initial welcome message
  if (!data) {
    return (
      <div className={styles.displayContainer}>
        <p className={styles.welcomeText}>Search for a Pokémon!</p>
      </div>
    );
  }

  // Extract the specific data we need
  const { name, sprites, types, stats } = data;
  const hpStat = stats.find((stat) => stat.stat.name === "hp");

  return (
    <div className={styles.displayContainer}>
      <div className={styles.pokedexScreen}>
        <img
          src={sprites.front_default}
          alt={name}
          className={styles.pokemonImage}
        />
        <h2 className={styles.pokemonName}>{name}</h2>
        <div className={styles.typesContainer}>
          {types.map(({ type }) => (
            <span
              key={type.name}
              className={styles.typeBadge}
              style={getTypeColor(type.name)}
            >
              {type.name}
            </span>
          ))}
        </div>
        <div className={styles.statsContainer}>
          <p>HP: {hpStat.base_stat}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDisplay;
