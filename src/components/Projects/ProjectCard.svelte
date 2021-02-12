<script lang="ts">
  import ArrowButton from "./card_comps/ArrowButton.svelte";
  import ProjectDescription from "./card_comps/ProjectDescription.svelte";
  import ProjectTitle from "./card_comps/ProjectTitle.svelte";
  import ProjectLinks from "./card_comps/ProjectLinks.svelte";
  import ProjectSlider from "./ProjectSlider.svelte";
  import SlideWrapper from "./SlideWrapper.svelte";
  import Skills from "./card_comps/Skills.svelte";
  import {
    projectStore,
    workState,
    projectKeys,
    scriptKeys,
  } from "../../store";
  import type { WorkExpand } from "../../types";

  const fetchProjects = (async () => {
    const url = `/stubs/${$workState.workType}s.json`;
    const response = await fetch(url);
    const data = await response.json();
    const keys = Object.keys(data);

    let sKeys: string[] = [],
      pKeys: string[] = [],
      projects: WorkExpand = {};

    keys.map((key) => {
      data[key].type === "script" ? sKeys.push(key) : pKeys.push(key);
      projects = { ...projects, [key]: { expand: false } };
      console.log(pKeys, sKeys);
    });

    projectStore.set(projects);
    projectKeys.set(pKeys);
    scriptKeys.set(sKeys);

    console.log($projectStore, $projectKeys, $scriptKeys);

    return await data;
  })();
</script>

<div class="project-card-wrapper">
  {#await fetchProjects}
    <div class="project-card">
      <div>...loading projects</div>
    </div>
  {:then data}
    {#each $workState.workType === "script" ? $scriptKeys : $projectKeys as projectKey}
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
