export let allTasks = [];
import { uId, findById } from "./helpers.js";
import { allProjects } from "./projects.js";


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
};

createTask(
  "Sample Task",
  "Here's an example of what a sother ample task looks like!"
);
createTask(
  "Sample Task2",
  "Here's another example of what a sample task looks like!"
);


const deleteTask  = (array, taskId) => {
  let index = findById(array, taskId);
  array.splice(index,1);
}

export const fullDeleteTask = (id) => {
  deleteTask(allTasks, id);
  for (const project of allProjects) {
    let index = findById(project.tasks, id);
    project.tasks.splice(index,1);
  }
}
