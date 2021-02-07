<script lang="ts">
  import { expandSkills } from "../../store";
  export let main: boolean;
</script>

{#if main}
  <div class={`slider-main ${$expandSkills.expand ? "inactive" : "active"}`}>
    <slot />
  </div>
{:else}
  <div
    class={`slider-secondary ${$expandSkills.expand ? "active" : "iactive"}`}
  >
    <slot />
  </div>
{/if}
