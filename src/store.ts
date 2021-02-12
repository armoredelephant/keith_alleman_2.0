import {writable} from "svelte/store";
import type {WorkState} from "./types";

export const workState = writable<WorkState>({
    workType: "project"
})

export const projectStore = writable(null);

export const projectKeys = writable<Array<string>>([]);

export const scriptKeys = writable<Array<string>>([]);