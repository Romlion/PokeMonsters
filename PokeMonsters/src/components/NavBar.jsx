import PropTypes from "prop-types";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const pickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
    checkForPikachu(pokemonIndex - 1);
  };
  const pickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
    checkForPikachu(pokemonIndex + 1);
  };

  const checkForPikachu = (index) => {
    if (pokemonList[index] && pokemonList[index].name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          onClick={() => setPokemonIndex(index)}
          key={pokemon.name}
        >
          {pokemon.name}
        </button>
      ))}
    </div>

  );
}

NavBar.propTypes = {
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
