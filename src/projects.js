//PROJECTS
export let allProjects = [];

class Project {
  constructor(name, description, tasks)
  { this.name = name;
    this.description = description;
    this.tasks = tasks;
  }
}

//Revisit to remove export
export const createProject = (name, description, tasks) => {
    let project = new Project (name, description, tasks);
    allProjects.push(project);
    addProjectLink(project);
}

const addProjectLink  = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink")
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
}


//Function to create project class
//Name, description, tas
//Create first class "All"

//Listen for form to submit new project
//Listen for form to edit project
//Listent for button to delete project
