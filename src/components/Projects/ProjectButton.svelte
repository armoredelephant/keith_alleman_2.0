<script lang="ts">
  import type { Work, WorkState } from "../../types";
  import { workState } from "../../store";
  export let text: Work;

  function workChange(e: MouseEvent) {
    const target = e.currentTarget as HTMLButtonElement;
    const buttonName = target.name;
    buttonName === "project"
      ? workState.set({ workType: "project" })
      : workState.set({ workType: "script" });
    console.log($workState.workType);
  }
</script>

<button
  name={text}
  class={$workState.workType === text
    ? "project-button selected"
    : "project-button"}
  on:click={(e) => workChange(e)}
>
  {text}
</button>
