<script lang="ts">
	import { localFavorites } from '../../../utils';
	import type { PageData } from './$types';

	export let data: PageData;

	let existInFav = localFavorites.existInFavorites(data.id);

	const onToggleFavorite = (pokeId: number) => {
		localFavorites.toggleFavorite(pokeId);
		existInFav = !existInFav;
	};
</script>

<svelte:head>
	<title>{data.name}</title>
</svelte:head>

<div class="flex justify-center">
	<div class="bg-zinc-500 rounded-md m-4 p-8">
		<img class="h-52" src={data.sprites.other?.dream_world.front_default} alt={data.name} />
	</div>
	<div class="flex flex-col justify-between flex-1 max-w-3xl bg-zinc-500 rounded-md m-4 p-4 le">
		<div class="flex justify-between">
			<h1 class="text-5xl capitalize tracking-tighter">{data.name}</h1>
			<button
				class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none"
				on:click={() => onToggleFavorite(data.id)}
			>
				<span
					class="relative w-44 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
				>
					{existInFav ? 'En Favoritos' : 'Guardar En Favoritos'}
				</span>
			</button>
		</div>
		<div>
			<span class="text-3xl tracking-tighter">Sprites:</span>
		</div>
		<div class="flex justify-around">
			<img class="h-24" src={data.sprites.front_default} alt="{data.name} front default" />
			<img class="h-24" src={data.sprites.back_default} alt="{data.name} back default" />
			<img class="h-24" src={data.sprites.front_shiny} alt="{data.name} front shiny" />
			<img class="h-24" src={data.sprites.back_shiny} alt="{data.name} back shiny" />
		</div>
	</div>
</div>
