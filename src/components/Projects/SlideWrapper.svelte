<script lang="ts">
  import { projectStore } from "../../store";
  export let projectKey: string;
  export let main: boolean;
</script>

{#if main}
  <div
    class={`slider-main ${
      $projectStore[projectKey].expand ? "inactive" : "active"
    }`}
  >
    <slot />
  </div>
{:else}
  <div
    class={`slider-secondary ${
      $projectStore[projectKey].expand ? "active" : "iactive"
    }`}
  >
    <slot />
  </div>
{/if}
