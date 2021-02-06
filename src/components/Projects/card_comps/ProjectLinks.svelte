<script lang="ts">
  export let git: string;
  export let url: string;
</script>

<div class="project-links">
  <div class="project-link-container">
    <div class={`project-link-wrapper ${!url && "disabled"}`}>
      <a class="project-link" href={url} disabled={!!url}>Visit</a>
    </div>
    <div class={`project-link-wrapper git ${!git && "disabled"}`}>
      <a class="project-link" href={git} disabled={!!git}>Github</a>
    </div>
  </div>
</div>
