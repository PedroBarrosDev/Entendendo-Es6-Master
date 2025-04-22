const pokemons = ['Pikachu', 'Charmander', 'Caterpie'];

function* capturarPokemons(lista) {
  for (const pokemon of lista) {
    yield `Capturou o ${pokemon}!`;
  }
}

for (const mensagem of capturarPokemons(pokemons)) {
  console.log(mensagem);
}
