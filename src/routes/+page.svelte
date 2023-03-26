<script lang="ts">
	import type { SmallPokemon } from '../interfaces';

  export let data;

  const pokemons:SmallPokemon[] = data.pokemons;
</script>

<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-6">
  {#each pokemons as {id, name}}
    <div>
      <span>#{id + 1}</span>
      <span class="capitalize">{name}</span>
    </div>
  {/each}
  </div>