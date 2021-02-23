<script lang="ts">
  import HeaderMain from "./components/Header/HeaderMain.svelte";
  import MainContainer from "./components/Containers/MainContainer.svelte";
  import IntroContainer from "./components/Intro/IntroContainer.svelte";
  import ProjectWrapper from "./components/Projects/ProjectWrapper.svelte";
  import ProjectButtonContainer from "./components/Projects/ProjectButtonContainer.svelte";
  import ProjectCard from "./components/Projects/ProjectCard.svelte";
  import AboutWrapper from "./components/About/AboutWrapper.svelte";
  import AboutCard from "./components/About/AboutCard.svelte";
  import Footer from "./components/Footer/Footer.svelte";
</script>

<HeaderMain />
<MainContainer>
  <IntroContainer />
</MainContainer>
<MainContainer section="projects">
  <ProjectWrapper>
    <ProjectButtonContainer />
    <ProjectCard />
  </ProjectWrapper>
</MainContainer>
<MainContainer section="about">
  <AboutWrapper>
    <AboutCard />
  </AboutWrapper>
</MainContainer>
<Footer />
