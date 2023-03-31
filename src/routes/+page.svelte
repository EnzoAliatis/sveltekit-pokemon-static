<script lang="ts">
	import { page } from '$app/stores';

	import PokemonCard from '../components/pokemon/PokemonCard.svelte';
	import type { SmallPokemon } from '../interfaces';

	export let data;

	const pokemons: SmallPokemon[] = data.pokemons;
</script>

<svelte:head>
	<title>Listado de Pokemones</title>

	<meta property="og:title" content="Lista de pokemons" />
  <meta property="og:description" content="Lista de los primeros 151 pokemons" />
  <meta property="og:image" content={`${$page.url.origin}/banner.png`} />

</svelte:head>

<div
	class="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2"
>
	{#each pokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
