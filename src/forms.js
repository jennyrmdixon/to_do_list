
import { allProjects } from "./projects";
import { findById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjectWithTasks } from "./gui";

export function initForms() {
    let isFormShown = false;

    //New Task Form Elements
    const newTaskFormCont = document.getElementById("newTaskFormCont");
    const newTaskForm = document.getElementById("newTaskForm");
    const newTaskBtn = document.getElementById("newTaskBtn");
    const select = document.getElementById("selectProj");
    let newTaskName = document.getElementById("newTaskName");
    let newTaskDesc = document.getElementById("newTaskDesc");
  
    //Edit Task Form Elements
    const editTaskFormCont = document.getElementById("editTaskFormCont");
    const editTaskForm = document.getElementById("editTaskForm");
    let editTaskId = document.getElementById("editTaskId");
    let editTaskName = document.getElementById("editTaskName");
    let editTaskDesc = document.getElementById("editTaskDesc");

    //New Project Form Fields
    const newProjButton = document.getElementById("newProjButton");

  
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
     editTaskDesc.value = allTasks[origTask].desc
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

  //Open Forms
    newTaskBtn.addEventListener("click", () => {
      if (!isFormShown){
      formRefreshProjectOptions();
      showForm(newTaskFormCont);
    }
    })

    newProjBtn.addEventListener("click", () => {
      if (!isFormShown){
      showForm(newProjFormWrap);
    }
    })
  
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("editBtn")) {
        if (!isFormShown){
          autofillEditForm(event.srcElement.parentNode.id);
           showForm(editTaskFormCont);
        }
      }
    })

   //Close Forms

    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("closeBtn")) {
        hideForm(event.target.parentNode.parentNode);
      }
    })

    //Handle Form Submits
    
    const formHandleSelectedProject = (task) => {
      let selectProject = document.getElementById("selectProject").value;
      addTaskToArray(allProjects[selectProject].tasks, task);
      displayProjectWithTasks(allProjects[selectProject]);
    }
  
    newTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createTask(newTaskName.value, newTaskDesc.value);
      formHandleSelectedProject(allTasks[allTasks.length - 1]);
    })
  
    editTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      editTask(editTaskId.value, editTaskName.value, editTaskDesc.value);
      location.reload();
    })
  
  }
  