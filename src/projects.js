//PROJECTS
import { addProjectLink } from "./gui";
import { getStoredProjects, updateStorage, uId, findById } from "./helpers";
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
    this.id = uId();
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

//Creates default project to use on first page load. 
//Skips step to create project link since this is done on page init. 
export const createDefaultProject = () => {
  let project = new Project("All Tasks", "An unfiltered view of all tasks", allTasks);
  project.id = "default";
  allProjects.push(project);
  updateStorage();
}

export const deleteProject = (projectId) => {
  let index = findById(allProjects, projectId);
  allProjects.splice(index, 1);
  updateStorage();
};

export const editProject = (id, name, desc) => {
  let index = findById(allProjects, id);
    if (name) {
      allProjects[index].name = name;
    }
    if (desc) {
      allProjects[index].desc = desc;
    }
    updateStorage();

}
