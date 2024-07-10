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
  updateStorage();
}

const deleteTaskFromArray = (array, taskId) => {
  let index = findById(array, taskId);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export const fullDeleteTask = (id) => {
  deleteTaskFromArray(allTasks, id);
  for (const project of allProjects) {
    deleteTaskFromArray(project.tasks, id);
  }
  updateStorage();
};
 
//In progress 

const editTaskName = (task, name) => {
  task.name = name;
}

const editTaskDescription = (task, description) => {
  task.name = description;
}

export const editTask = (id, name, description) => {
  let index = findById(allTasks, id);
  if (name) {
  editTaskName(allTasks[index], name);
  }
  if (description) {
  editTaskDescription(allTasks[index], description);
  }
  updateStorage();
}



