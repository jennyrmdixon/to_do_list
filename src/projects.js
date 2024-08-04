//PROJECTS
import { addProjectLink } from "./gui";
import { getStoredProjects } from "./helpers";

export let allProjects = [];
export async function updateProjects() {
  await getStoredProjects;
  allProjects = getStoredProjects();
}

class Project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }
}

export const createProject = (name, description, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, description, tasks);
  allProjects.push(project);
  addProjectLink(project);
}

