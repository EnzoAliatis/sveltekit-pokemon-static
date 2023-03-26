import { pokeApi } from '../api';
import type { PokemonListResponse, SmallPokemon } from '../interfaces';

export async function load() {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] = data.results.map((pk, idx) => ({
    ...pk,
    id: idx + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`,
  }))

  console.log(data.results)

  return {
    pokemons,
  }
}