<script lang="ts">
  export let section: string;
</script>

<main id={section} class="main-container">
  <slot />
</main>
