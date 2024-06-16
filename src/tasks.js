export let allTasks = [];
import { uId, findById } from "./helpers.js";

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


export const deleteTask = (id) => {
  console.log(allTasks);
  let index = findById(allTasks, id);
  console.log(index);
  allTasks.splice(index,1);
  console.log(allTasks);

  //Also remove from any projects
}

