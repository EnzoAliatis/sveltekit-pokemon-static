import axios from 'axios';
import type { PokemonListResponse } from '../interfaces';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});


export const getAllPokeRoutesByNames = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemonsRoutes:string[] = data.results.map((pk) => (`/name/${pk.name}`));

  return {
    pokemonsRoutes,
  }
}


export default pokeApi;