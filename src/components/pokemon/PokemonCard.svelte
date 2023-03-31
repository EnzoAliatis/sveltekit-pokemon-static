<script lang="ts">
	import type { SmallPokemon } from '../../interfaces';

	export let pokemon: SmallPokemon;

	const { id, name, img } = pokemon;
</script>

<a
	href="/pokemon/{id}"
	class="flex w-full max-w-xs h-48 flex-col items-center justify-between rounded overflow-hidden dark:bg-zinc-600 p-2 cursor-pointer"
>
	<img class="h-36" src={img} alt={name} loading="lazy" />
	<div class="flex w-full justify-between">
		<span class="capitalize">{name}</span>
		<span>#{id}</span>
	</div>
</a>
