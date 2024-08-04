import { uId, findById, updateStorage, getStoredTasks } from "./helpers.js";
import { allProjects } from "./projects.js";

export let allTasks = [];
if (localStorage.allTasks) {
  allTasks = getStoredTasks();
}

class Task {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.id = uId();
  }
}

export const createTask = (name, desc) => {
  let task = new Task(name, desc);
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
  for (let project of allProjects) {
    deleteTaskFromArray(project.tasks, id);
  }
  updateStorage();
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



