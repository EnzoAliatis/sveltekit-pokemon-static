import { getPokemonInfo } from '../../../utils/pokemons';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
  const pokemon = await getPokemonInfo(params.id);

  return {
    ...pokemon,
  }
 
 
}) satisfies PageServerLoad;