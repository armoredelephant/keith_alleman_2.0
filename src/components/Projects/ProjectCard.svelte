<script lang="ts">
  import ArrowButton from "./card_comps/ArrowButton.svelte";
  import ProjectDescription from "./card_comps/ProjectDescription.svelte";
  import ProjectTitle from "./card_comps/ProjectTitle.svelte";
  import ProjectLinks from "./card_comps/ProjectLinks.svelte";

  const fetchProjects = (async () => {
    const response = await fetch("/stubs/projects.json");
    return await response.json();
  })();
</script>

<!-- This will pull data from store for projectts which will be pulled from backend. -->
<!-- Will need a project object in store -->
<!-- Arrow button will handle state and will only be clickable in mobile when both slides aren't displayed-->

<div class="project-card">
  {#await fetchProjects}
    <div>...loading projects</div>
  {:then { title, description, git, url }}
    <ArrowButton />
    <ProjectTitle {title} />
    <ProjectDescription {description} />
    <ProjectLinks {git} {url} />
  {:catch}
    <p>Unanbe to load projects. Please refresh the page!</p>
  {/await}
</div>
