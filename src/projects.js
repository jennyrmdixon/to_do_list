//PROJECTS
import { addProjectLink } from "./gui";
import { getStoredProjects, updateStorage } from "./helpers";
import { allTasks } from "./tasks";

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

//Creates default project. Skips step to create project link since this is done on page init. 
export const createDefaultProject = () => {
  let project = new Project("All Tasks", "An unfiltered view of all tasks", allTasks);
  allProjects.push(project);
  updateStorage();
}
