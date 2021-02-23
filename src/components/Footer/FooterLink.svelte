<script lang="ts">
  export let url: string;
  export let icon: string;
</script>

<div class="footer-link-wrapper">
  {#if icon}
    <a id="social-link" class="social-icon" href={url}>
      <i id="social-icon" class={`fa fa-${icon}`} />
    </a>
  {:else}
    <a id="resume" class="resume-link" href={url}> resume </a>
  {/if}
</div>
