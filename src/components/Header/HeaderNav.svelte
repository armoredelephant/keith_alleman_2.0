<script lang="ts">
  import HomeAnchor from "./HomeAnchor.svelte";
  import NavAnchor from "./NavAnchor.svelte";
</script>

<nav class="header-nav">
  <ul class="nav-list">
    <NavAnchor name="projects" />
    <HomeAnchor />
    <NavAnchor name="about" />
  </ul>
</nav>
