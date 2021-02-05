<script lang="ts">
  import ArrowButton from "./ArrowButton.svelte";
</script>

<!-- This will pull data from store for projectts which will be pulled from backend. -->
<!-- Will need a project object in store -->
<!-- Arrow button will handle state and will only be clickable in mobile when both slides aren't displayed-->

<div class="project-card">
  <ArrowButton />
  <div class="project-card-title">Digital DArkage Studios</div>
  <p class="project-description">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aliquam,
    dolorem in suscipit quisquam corporis, deleniti sunt aut dolor at animi. Ut,
    mollitia ratione quisquam beatae adipisci asperiores quos omnis!
  </p>
  <div class="project-link-container">
    <div>
      <a class="project-link" href="https://#">Visit</a>
    </div>
    <div>
      <a class="project-link" href="https://#">Visit</a>
    </div>
  </div>
</div>
