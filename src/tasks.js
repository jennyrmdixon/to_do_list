import { uId, findById, updateStorage, getStoredTasks } from "./helpers.js";
import { allProjects } from "./projects.js";

export let allTasks = [];
if (localStorage.allTasks) {
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
  updateStorage();
};

if (!localStorage.allTasks) {
  createTask("Sample Task", "Here's an example of what a task looks like!");
}

export const addTaskToArray = (array, task) => {
  array.push(task);
}

const deleteTaskFromArray = (array, taskId) => {
  let index = findById(array, taskId);
  console.log(index);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export const fullDeleteTask = (id) => {
  deleteTaskFromArray(allTasks, id);
  for (const project of allProjects) {
    console.log(project);
    deleteTaskFromArray(project.tasks, id);
  }
  updateStorage();
};

