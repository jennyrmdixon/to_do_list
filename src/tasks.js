import { uId, findIndexById, updateStorage, getStoredTasks } from "./helpers.js";
import { allProjects } from "./projects.js";

export let allTasks = [];
if (localStorage.allTasks) {
  allTasks = getStoredTasks();
}

class Task {
  constructor(name, desc, color) {
    this.name = name;
    this.desc = desc;
    this.color = color;
    this.id = uId();
  }
}

export const createTask = (name, desc, color) => {
  let task = new Task(name, desc, color);
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

 export const deleteTaskFromArray = (array, taskId) => {
  let index = findIndexById(array, taskId);
  if (index > -1) {
    array.splice(index, 1);
  }
  updateStorage();
};

export const fullDeleteTask = (id) => {
  deleteTaskFromArray(allTasks, id);
  for (let project of allProjects) {
    deleteTaskFromArray(project.tasks, id);
  }
};

const editTaskInProject = (id, name, desc, projectTasks) => {
  let task = projectTasks.find(task => task.id === id);
  // If the task is found, update its properties
  if (task) {
    if (name) {
      task.name = name;
    }
    if (desc) {
      task.desc = desc;
    }
  }

}
 
export const editTask = (id, name, desc) => {
  for (let project of allProjects){
    editTaskInProject(id, name, desc, project.tasks);
  }
  updateStorage();
}



