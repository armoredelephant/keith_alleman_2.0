<script lang="ts">
  import ArrowButton from "./card_comps/ArrowButton.svelte";
  import ProjectDescription from "./card_comps/ProjectDescription.svelte";
  import ProjectTitle from "./card_comps/ProjectTitle.svelte";
  import ProjectLinks from "./card_comps/ProjectLinks.svelte";
  import ProjectSlider from "./ProjectSlider.svelte";
  import SlideWrapper from "./SlideWrapper.svelte";
  import Skills from "./card_comps/Skills.svelte";
  import { projectStore } from "../../store";

  const fetchProjects = (async () => {
    const response = await fetch("/stubs/projects.json");
    const data = await response.json();
    const keys = Object.keys(data);

    let projects = {};

    keys.map((key) => {
      projects = { ...projects, [key]: { expand: false } };
    });

    projectStore.set(projects);

    return await data;
  })();
</script>

<div class="project-card-wrapper">
  {#await fetchProjects}
    <div class="project-card">
      <div>...loading projects</div>
    </div>
  {:then data}
    {#each Object.keys(data) as projectKey}
      <div class="project-card">
        <ArrowButton {projectKey} />
        <ProjectSlider>
          <SlideWrapper {projectKey} main={true}>
            <ProjectTitle title={data[projectKey].title} />
            <ProjectDescription description={data[projectKey].description} />
            <ProjectLinks
              git={data[projectKey].git}
              url={data[projectKey].url}
            />
          </SlideWrapper>
          <SlideWrapper {projectKey}>
            <ProjectTitle title="Skills" />
            <Skills skills={data[projectKey].skills} />
          </SlideWrapper>
        </ProjectSlider>
      </div>
    {/each}
  {:catch}
    <div class="project-card">
      <p>Unanbe to load projects. Please refresh the page!</p>
    </div>
  {/await}
</div>
