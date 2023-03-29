<script>
  import "../app.css";

  import Navbar from '../components/ui/Navbar.svelte';
</script>

<svelte:head>
  <title>Poke App</title>
  <meta name="author" content="Enzo Aliatis" />
  <meta name="description" content="Info sobre el pokemon xxx" />
  <meta name="keywords" content="xxxx, pokemon, pokedex" />
</svelte:head>

<!-- TODO: add light mode -->

<Navbar />
<main class="p-5 ">
  <slot />
</main>