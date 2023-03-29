import { pokeApi } from '../../../api';
import type { Pokemon } from '../../../interfaces/pokemon-full';
import type { PageServerLoad } from './$types';


export const load = (async ({ params }) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${params.id}`)

  return {
    ...data,
  }
 
}) satisfies PageServerLoad;