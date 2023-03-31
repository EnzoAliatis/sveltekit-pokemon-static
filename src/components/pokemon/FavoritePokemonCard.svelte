<script lang="ts">
  export let pokeId: number;
</script>


<a href="/pokemon/{pokeId}">
  <div
    class="flex w-full max-w-xs h-48 mx-auto flex-col items-center justify-between justify-self-center rounded overflow-hidden dark:bg-zinc-600 p-2 cursor-pointer"
  >
    <img
      class="h-36"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`}
      alt={`Pokemon #${pokeId}`}
    />
  </div>
</a>