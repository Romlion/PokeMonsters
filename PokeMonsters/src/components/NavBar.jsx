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
    <nav>
      {pokemonIndex > 0 && (
        <button type="button" onClick={pickPrevious}>
          previous
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={pickNext}>
          next
        </button>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
