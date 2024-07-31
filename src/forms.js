
import { allProjects } from "./projects";
import { findById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjectWithTasks } from "./gui";

export function initForms() {
    const newTaskButton = document.getElementById("newTaskButton");
    const select = document.getElementById("selectProject");
    let isFormShown = false;
    ////make this a node list of all close buttons, also edit html file with similar tasks - do this last
    
    //Edit html file to include a close button
    //Task Form
    const taskFormCloseBtn = document.getElementById("taskFormClose");
    const taskFormContainer = document.getElementById("taskFormContainer");
    const taskForm = document.getElementById("taskForm");
    
    //Improve variables
  
    //Edit task form
    let editTaskId = document.getElementById("editTaskId");
    let editTaskName = document.getElementById("editTaskName");
    let editTaskDescription = document.getElementById("editTaskDescription");
  
    const editTaskFormContainer = document.getElementById("editTaskFormContainer");
    const editTaskForm = document.getElementById("editTaskForm");
    const editTaskFormCloseBtn = document.getElementById("editTaskFormClose");
  
    //Generate Form Fields
    const formClearProjectOptions = () => {
      select.textContent = "";
    };
  
    const formDisplayProjectOptions = () => {
      //skips All Projects at Index 0
      for (let i = 1; i < allProjects.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.textContent = allProjects[i].name;
        projectOption.value = i;
        select.appendChild(projectOption);
      }
    };
  
  const autofillEditForm = (taskId) => {
     let origTask = findById(allTasks, taskId);
     editTaskId.value = allTasks[origTask].id;
     editTaskName.value = allTasks[origTask].name;
     editTaskDescription.value = allTasks[origTask].description
  }
  
  
    ////combined handle ProjectOptions function - do this last
   const hideForm = (form) => {
    form.classList.add("hidden");
      isFormShown = false
   }
  
   const showForm = (form) => {
    form.classList.remove("hidden");
    isFormShown = true;
   }
  
   //last - consolodate projects options
  
    newTaskButton.addEventListener("click", () => {
      if (!isFormShown){
      formClearProjectOptions();
      formDisplayProjectOptions();
      showForm(taskFormContainer);
    }
    });
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("editBtn")) {
        if (!isFormShown){
          autofillEditForm(event.srcElement.parentNode.id);
           showForm(editTaskFormContainer);
        }
      }
    });
  
    /////Edit this to attach to any close button? - do this last
    taskFormCloseBtn.addEventListener("click", () => {
      if (isFormShown){
    hideForm(taskFormContainer);
    }
    });
  
    editTaskFormCloseBtn.addEventListener("click", () => {
      if (isFormShown){
    hideForm(editTaskFormContainer);
    }
    });
  
  //copy for now
  
    const formHandleSelectedProject = (task) => {
      let selectProject = document.getElementById("selectProject").value;
      addTaskToArray(allProjects[selectProject].tasks, task);
      displayProjectWithTasks(allProjects[selectProject]);
    };
  
  
    ////Make fucntion to get task name, description, return as parameters? Do this last
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let taskName = document.getElementById("taskName").value;
      let taskDescription = document.getElementById("taskDescription").value;
      createTask(taskName, taskDescription);
      formHandleSelectedProject(allTasks[allTasks.length - 1]);
    });
  
    editTaskForm.addEventListener("submit", (event) => {
   
      event.preventDefault();
      editTask(editTaskId.value, editTaskName.value, editTaskDescription.value);
      //Revisit to keep on the same screen
      location.reload();
    });
  
  }
  