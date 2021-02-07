<script lang="ts">
  export let skills: string[];
</script>

<div class="skills-container">
  <ul class="skills-list">
    {#each skills as skill}
      <li class="skills-item">
        {skill}
      </li>
    {/each}
  </ul>
</div>
