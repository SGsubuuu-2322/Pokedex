const poke_container = document.getElementById("poke-container");

const pokemon_count = 150;

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
};

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(URL);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = () => {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonInnerHTml = `
    <div class="img-container">
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
      alt="poke-image"
    />
  </div>
  <div class="info">
    <span class="number">#001</span>
    <div class="name">Bulbasaur</div>
    <div class="type">Type: <span>Grass</span></div>
  </div>
    `;

  pokemonCard.innerHTML = pokemonInnerHTml;
  poke_container.appendChild(pokemonCard);
};

fetchPokemons();
