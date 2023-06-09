import { pokeApi } from '../api'
import type { Pokemon } from '../interfaces/pokemon-full'

export const getPokemonInfo = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  }

  return {
    ...pokemon,
  }
}