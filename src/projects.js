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

//Revisit to remove export
export const createProject = (name, description, tasks) => {
  if (!Array.isArray(tasks)) {
    tasks = [tasks];
  }
  let project = new Project(name, description, tasks);
  allProjects.push(project);
  addProjectLink(project);
};





//Function to create project class
//Name, description, tas
//Create first class "All"

//Listen for form to submit new project
//Listen for form to edit project
//Listent for button to delete project
