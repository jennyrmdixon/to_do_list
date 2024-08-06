
import { allProjs } from "./projects";
import { findById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjWithTasks } from "./gui";

export function initForms() {
    let isFormShown = false;

    //New Task Form Elements
    const newTaskFormWrap = document.getElementById("newTaskFormWrap");
    const newTaskForm = document.getElementById("newTaskForm");
    const newTaskBtn = document.getElementById("newTaskBtn");
    const select = document.getElementById("selectProj");
    let newTaskName = document.getElementById("newTaskName");
    let newTaskDesc = document.getElementById("newTaskDesc");
  
    //Edit Task Form Elements
    const editTaskFormWrap = document.getElementById("editTaskFormWrap");
    const editTaskForm = document.getElementById("editTaskForm");
    let editTaskId = document.getElementById("editTaskId");
    let editTaskName = document.getElementById("editTaskName");
    let editTaskDesc = document.getElementById("editTaskDesc");

    //New Project Form Fields
    const newProjBtn = document.getElementById("newProjBtn");

  
  //Generate Dynmaic Form Content
    const formRefreshProjOpts = () => {
       //clear project options 
       select.textContent = "";
       //Write new project options
       //Skips All Projects at Index 0
       for (let i = 1; i < allProjs.length; i++) {
         let projOpt = document.createElement("option");
         projOpt.textContent = allProjs[i].name;
         projOpt.value = i;
         select.appendChild(projOpt);
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
      formRefreshProjOpts();
      showForm(newTaskFormWrap);
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
           showForm(editTaskFormWrap);
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
    
    const formHandleSelectedProj = (task) => {
      let selectProj = document.getElementById("selectProj").value;
      addTaskToArray(allProjs[selectProj].tasks, task);
      displayProjWithTasks(allProjs[selectProj]);
    }
  
    newTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      createTask(newTaskName.value, newTaskDesc.value);
      formHandleSelectedProj(allTasks[allTasks.length - 1]);
    })
  
    editTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      editTask(editTaskId.value, editTaskName.value, editTaskDesc.value);
      location.reload();
    })
  
  }
  