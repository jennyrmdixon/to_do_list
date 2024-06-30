import { uId, findById, populateStorage, getStoredTasks} from "./helpers.js";
import { allProjects } from "./projects.js";

export let allTasks =[];
if (localStorage.allTasks){
  allTasks = getStoredTasks();
  }

class Task {
  constructor(name, description) { 
    this.name = name;
    this.description = description;
    this.id = uId();
  }
}

export const createTask = (name, description) => {
  let task = new Task(name, description);
  allTasks.push(task);
  populateStorage();
};

if (!localStorage.allTasks){
createTask(
  "Sample Task",
  "Here's an example of what a task looks like!"
);
}

const deleteTask  = (array, taskId) => {
  let index = findById(array, taskId);
  array.splice(index,1);
}

export const fullDeleteTask = (id) => {
  deleteTask(allTasks, id);
  for (const project of allProjects) {
    let index = findById(project.tasks, id);
    project.tasks.splice(index,1);
    populateStorage();
  }
}
