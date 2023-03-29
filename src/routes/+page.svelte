<script lang="ts">
	import PokemonCard from '../components/pokemon/PokemonCard.svelte';
	import type { SmallPokemon } from '../interfaces';

	export let data;

	const pokemons: SmallPokemon[] = data.pokemons;
</script>

<div
	class="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2"
>
	{#each pokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
