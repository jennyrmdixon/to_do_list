/*Export Actions: create task, delete task */

// first goal - via a prompt (prompt in place of event listeners would be, be able to add, delete, and edit tasks. display the full list in the console.)


export let allTasks = [];
console.log("tasks1");
console.log(allTasks);

class Task {
  constructor(name, description)
  { this.name = name;
    this.description = description;
  }
}

export default function createTask (name, description) {
    let task = new Task (name, description);
    allTasks.push(task);
}
createTask ("dust", "dusting");
createTask ("drink water", "drink 32 oz water");



//export function to delete task (and add to an array)

// /*Export function to edit task*/
// /*Find in array - lookup by name?*/
// /*Loop through fields*/
// /*If edited =
// /*"index"."property" = new value
// /*


// /***Reorg to another file - form */
// /*For each field 
// /*write new property*/


// /*Function to check if an task has an existing name, export array # if it exists - don't create 2 of same name
// function findTask (name) {
// }*/