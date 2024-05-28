export let allTasks = [];

class Task {
  constructor(name, description)
  { this.name = name;
    this.description = description;
  }
}

const createTask = (name, description) => {
    let task = new Task (name, description);
    allTasks.push(task);
}

createTask ("Sample Task", "Here's an example of what a sother ample task looks like!");
createTask ("Sample Task2", "Here's another example of what a sample task looks like!");


const taskFormContainer = document.getElementById("projectList");
const taskForm = document.getElementById("taskForm");


  taskForm.addEventListener('submit', (event) => {
    //Add logic to add unique identifier onto task
      event.preventDefault();
        let taskName = document.getElementById("taskName").value;
        let taskDescription = document.getElementById("taskDescription").value;
        //Assign task to  default project + any checked projects
        createTask(taskName, taskDescription);
  })


//Listen for form to submit task edit
//Populate with unique identifier
//Edit attributes based on form

//Listen for delete button for task
//On submit, remove from array



