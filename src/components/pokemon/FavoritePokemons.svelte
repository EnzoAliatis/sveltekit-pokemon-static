<script lang="ts">
	import PokemonFavoriteCard from './FavoritePokemonCard.svelte';

	export let favorites: number[];
</script>

<div
	class="grid gap-2 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
>
	{#each favorites as fav}
		<PokemonFavoriteCard pokeId={fav} />
	{/each}
</div>
