// Dado el nombre de un pokémon retornar el número del mismo.
function fetchPokemon(name) {
   
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => console.log(data.id));
  }
  console.log(fetchPokemon("pikachu"));

// Dado el número de un pokémon retornar un objeto con sus 6 stats base.
function fetchPokemonStats(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => console.log(data.stats));
  }
  
  console.log(fetchPokemonStats(4));

// Suma total de pokemones por tipo, debe recibir el tipo en string.
function fetchPokemon(type) {
    fetch(`https://pokeapi.co/api/v2/type/${type}`)
      .then(res => res.json())
      .then(data => console.log(data.pokemon.length));
  }
  
  console.log(fetchPokemon("ground"))

  //Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
