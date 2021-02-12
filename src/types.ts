export type Work = "project" | "script";

export interface WorkState {
    workType: Work
}

export interface Project {
    title: string,
    description: string,
    git?: string,
    url?: string,
    skills: string[],
    id: string,
    type: Work 
}

type ArrowExpand = {
    expand: boolean
}
export interface WorkExpand {
    [key: string]: ArrowExpand
}

export interface WorkStore {
    scripts?: WorkExpand,
    projects?: WorkExpand
}
