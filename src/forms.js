
import { allProjects } from "./projects";
import { findById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjectWithTasks } from "./gui";

export function initForms() {
    let isFormShown = false;

    //New Task Form Elements
    const newTaskFormContainer = document.getElementById("taskFormContainer");
    const newTaskForm = document.getElementById("taskForm");
    const newTaskButton = document.getElementById("newTaskButton");
    const select = document.getElementById("selectProject");
    let newTaskName = document.getElementById("taskName");
    let newTaskDescription = document.getElementById("taskDescription");
  
    //Edit Task Form Elements
    const editTaskFormContainer = document.getElementById("editTaskFormContainer");
    const editTaskForm = document.getElementById("editTaskForm");
    let editTaskId = document.getElementById("editTaskId");
    let editTaskName = document.getElementById("editTaskName");
    let editTaskDescription = document.getElementById("editTaskDescription");

  
  //Generate Dynmaic Form Content
    const formRefreshProjectOptions = () => {
       //clear project options 
       select.textContent = "";
       //Write new project options
       //Skips All Projects at Index 0
       for (let i = 1; i < allProjects.length; i++) {
         let projectOption = document.createElement("option");
         projectOption.textContent = allProjects[i].name;
         projectOption.value = i;
         select.appendChild(projectOption);
       }
    }
  
  const autofillEditForm = (taskId) => {
     let origTask = findById(allTasks, taskId);
     editTaskId.value = allTasks[origTask].id;
     editTaskName.value = allTasks[origTask].name;
     editTaskDescription.value = allTasks[origTask].description
  }

  //Form Helper Functions
   const hideForm = (form) => {
    form.classList.add("hidden");
      isFormShown = false
   }
  
   const showForm = (form) => {
    form.classList.remove("hidden");
    isFormShown = true;
   }

  //Handle Forms
    newTaskButton.addEventListener("click", () => {
      if (!isFormShown){
      formRefreshProjectOptions();
      showForm(newTaskFormContainer);
    }
    })
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("editBtn")) {
        if (!isFormShown){
          autofillEditForm(event.srcElement.parentNode.id);
           showForm(editTaskFormContainer);
        }
      }
    })
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("closeBtn")) {
        hideForm(event.target.parentNode.parentNode);
      }
    })

    
    const formHandleSelectedProject = (task) => {
      let selectProject = document.getElementById("selectProject").value;
      addTaskToArray(allProjects[selectProject].tasks, task);
      displayProjectWithTasks(allProjects[selectProject]);
    }
  
    
    newTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createTask(newTaskName.value, newTaskDescription.value);
      formHandleSelectedProject(allTasks[allTasks.length - 1]);
    })
  
    editTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      editTask(editTaskId.value, editTaskName.value, editTaskDescription.value);
      location.reload();
    })
  
  }
  