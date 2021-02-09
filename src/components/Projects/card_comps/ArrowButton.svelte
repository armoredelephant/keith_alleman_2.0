<script lang="ts">
  import { projectStore } from "../../../store";
  export let projectKey: string;

  // This needs to be changed to also track the project that was clicked.
  function showSkills() {
    let { expand } = $projectStore[projectKey];
    let newStore = $projectStore;

    newStore[projectKey].expand = !expand;

    projectStore.set(newStore);
  }
</script>

<div class="arrow-button-container">
  <button class="arrow-button" on:click={showSkills}>
    {#if !$projectStore[projectKey].expand}
      <svg
        width="44"
        height="35"
        viewBox="0 0 44 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.4615 17.3204L25 34.6409L25 0L43.4615 17.3204Z"
          fill="#87DF7D"
        />
        <path
          d="M17.9615 33.4862L0.730772 17.3205L17.9615 1.1547L17.9615 33.4862Z"
          stroke="#87DF7D"
        />
      </svg>
    {:else}
      <svg
        width="44"
        height="35"
        viewBox="0 0 44 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 1.1547L42.7308 17.3204L25.5 33.4862V1.1547Z"
          stroke="#87DF7D"
        />
        <path
          d="M0 17.3205L18.4615 0L18.4615 34.6409L0 17.3205Z"
          fill="#87DF7D"
        />
      </svg>
    {/if}
  </button>
</div>
