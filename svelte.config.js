import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { getAllPokeRoutesByNamesFunc } from './utils.js';


const pokemons151 = [...Array(151)].map((val, idx) => `/pokemon/${idx + 1}`);
const pokemons151ByName = await getAllPokeRoutesByNamesFunc();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: [...pokemons151, ...pokemons151ByName]
		}
	}
};

export default config;
