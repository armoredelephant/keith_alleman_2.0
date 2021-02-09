import {writable} from "svelte/store";
import type {WorkState} from "./types";

export const workState = writable<WorkState>({
    workType: "project"
})

export const projectStore = writable(null);
