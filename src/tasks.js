/*Export Actions: create task, delete task */

// first goal - via a prompt (prompt in place of event listeners would be, be able to add, delete, and edit tasks. display the full list in the console.)


export let allTasks = [];
console.log(allTasks);

class Task {
  constructor(name, description)
  { this.name = name;
    this.description = description;
  }
}

function createTask (name, description) {
    let task = new Task (name, description);
    allTasks.push(task);
    console.log("run createTask")
    console.log(allTasks)

}

createTask ("Sample Task", "Here's an example of what a sample task looks like!");

const taskFormContainer = document.getElementById("taskFormContainer");
const taskForm = document.getElementById("taskForm");

export function setCreateTaskListener () {
  taskForm.addEventListener('submit', (event) => {
    //Add logic to add unique identifier onto task
      event.preventDefault();
        let taskName = document.getElementById("taskName").value;
        let taskDescription = document.getElementById("taskDescription").value;
        createTask(taskName, taskDescription);
  })
}

//Listen for form to submit task
//On submit, find task (by name or ID)


//Listen for delete button on form
//On submit, remove from array