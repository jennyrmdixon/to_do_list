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
}


//Function to create project class
//Name, description, tasks

//Create first class "All"

//Listen for form to submit new project
//Listen for form to edit project
//Listent for button to delete project
