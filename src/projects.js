//PROJECTS
import { addProjectLink } from "./gui";
import { getStoredProjects } from "./helpers";

export let allProjects = [];
export async function updateProjects() {
  await getStoredProjects;
  allProjects = getStoredProjects();
}

class Project {
  constructor(name, desc, tasks) {
    this.name = name;
    this.desc = desc;
    this.tasks = tasks;
  }
}

export const createProject = (name, desc, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, desc, tasks);
  allProjects.push(project);
  addProjectLink(project);
}

