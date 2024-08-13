//PROJECTS
import { addProjectLink } from "./gui";
import { getStoredProjects, updateStorage } from "./helpers";

export let allProjects = [];

export function updateProjects() {
  if (getStoredProjects){
  allProjects = getStoredProjects();
}
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
  updateStorage();
};
