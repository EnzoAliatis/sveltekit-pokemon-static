export const getAllPokeRoutesByNamesFunc = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
	const { results } = await response.json()

  const pokemonsRoutes = results.map((pk) => (`/name/${pk.name}`));

  return pokemonsRoutes
};

