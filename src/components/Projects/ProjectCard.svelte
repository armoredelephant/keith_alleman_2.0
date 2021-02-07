<script lang="ts">
  import ArrowButton from "./card_comps/ArrowButton.svelte";
  import ProjectDescription from "./card_comps/ProjectDescription.svelte";
  import ProjectTitle from "./card_comps/ProjectTitle.svelte";
  import ProjectLinks from "./card_comps/ProjectLinks.svelte";
  import ProjectSlider from "./ProjectSlider.svelte";
  import SlideWrapper from "./SlideWrapper.svelte";
  import Skills from "./card_comps/Skills.svelte";
  const fetchProjects = (async () => {
    const response = await fetch("/stubs/projects.json");
    return await response.json();
  })();

  function getKeys(data: any) {
    return Object.keys(data);
  }
</script>

<div class="project-card-wrapper">
  {#await fetchProjects}
    <div class="project-card">
      <ArrowButton />
      <div>...loading projects</div>
    </div>
  {:then data}
    {#each getKeys(data) as projectKey}
      <div class="project-card">
        <ArrowButton />
        <ProjectSlider>
          <SlideWrapper main={true}>
            <ProjectTitle title={data[projectKey].title} />
            <ProjectDescription description={data[projectKey].description} />
            <ProjectLinks
              git={data[projectKey].git}
              url={data[projectKey].url}
            />
          </SlideWrapper>
          <SlideWrapper>
            <ProjectTitle title="Skills" />
            <Skills skills={data[projectKey].skills} />
          </SlideWrapper>
        </ProjectSlider>
      </div>
    {/each}
  {:catch}
    <div class="project-card">
      <ArrowButton />
      <p>Unanbe to load projects. Please refresh the page!</p>
    </div>
  {/await}
</div>
