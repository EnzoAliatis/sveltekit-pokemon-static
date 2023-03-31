<script lang="ts">
	import FavoritePokemons from '../../components/pokemon/FavoritePokemons.svelte';
import NoFavorites from '../../components/ui/NoFavorites.svelte';
	import { localFavorites } from '../../utils';

	let favorites: number[] = localFavorites.getAllFavorites();
</script>

<svelte:head>
	<title>Poke Favoritos</title>
</svelte:head>

{#if favorites.length === 0}
	<NoFavorites />
{:else}
  <FavoritePokemons {favorites} />
{/if}
