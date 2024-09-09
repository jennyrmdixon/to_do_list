import { allProjects, createProject, editProject } from "./projects";
import { findIndexById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjectWithTasks } from "./gui";

export function initForms() {
  let isFormShown = false;

  //New Task Form Elements
  const newTaskFormWrap = document.getElementById("newTaskFormWrap");
  const newTaskForm = document.getElementById("newTaskForm");
  const newTaskBtn = document.getElementById("newTaskBtn");
  const select = document.getElementById("selectProject");
  const noProjectNote = document.getElementById("noProjectNote");
  let newTaskName = document.getElementById("newTaskName");
  let newTaskDesc = document.getElementById("newTaskDesc");

  //Edit Task Form Elements
  const editTaskFormWrap = document.getElementById("editTaskFormWrap");
  const editTaskForm = document.getElementById("editTaskForm");
  let editTaskId = document.getElementById("editTaskId");
  let editTaskName = document.getElementById("editTaskName");
  let editTaskDesc = document.getElementById("editTaskDesc");

  //New Project Form Fields
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormWrap = document.getElementById("newProjectFormWrap");
  const newProjectForm = document.getElementById("newProjectForm");
  let newProjectName = document.getElementById("newProjectName");
  let newProjectDesc = document.getElementById("newProjectDesc");

  //Edit Projec Form Fields
  let editProjectId = document.getElementById("editProjectId");
  let editProjectName = document.getElementById("editProjectName");
  let editProjectDesc = document.getElementById("editProjectDesc");

  //Generate Dynmaic Form Content
  const formRefreshProjectOptions = () => {
    //List all project options, only if projects other than default project exist
    if (allProjects.length > 1) {
      noProjectNote.classList.add("hidden");
      select.classList.remove("hidden");
      select.textContent = "";
      //Skips All Projects at Index 0
      for (let i = 1; i < allProjects.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.textContent = allProjects[i].name;
        projectOption.value = i;
        select.appendChild(projectOption);
      }
      let noProjectOption = document.createElement("option");
      noProjectOption.textContent = "Don't add to project";
      noProjectOption.value = "no project";
      select.appendChild(noProjectOption);
    } else {
      select.classList.add("hidden");
    }
  };

  const autofillTaskEditForm = (taskId) => {
    let origTask = findIndexById(allTasks, taskId);
    editTaskId.value = allTasks[origTask].id;
    editTaskName.value = allTasks[origTask].name;
    editTaskDesc.value = allTasks[origTask].desc;
  };

  const autofillProjectEditForm = (projectId) => {
    let origProject = findIndexById(allProjects, projectId);
    editProjectId.value = allProjects[origProject].id;
    editProjectName.value = allProjects[origProject].name;
    editProjectDesc.value = allProjects[origProject].desc;
  };

  //Form Helper Functions
  const hideForm = (form) => {
    form.classList.add("hidden");
    isFormShown = false;
  };

  const showForm = (form) => {
    form.classList.remove("hidden");
    isFormShown = true;
  };

  //Open Forms
  newTaskBtn.addEventListener("click", () => {
    if (!isFormShown) {
      formRefreshProjectOptions();
      showForm(newTaskFormWrap);
    }
  });

  newProjectBtn.addEventListener("click", () => {
    if (!isFormShown) {
      showForm(newProjectFormWrap);
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("taskEditBtn")) {
      if (!isFormShown) {
        autofillTaskEditForm(event.srcElement.parentNode.id);
        showForm(editTaskFormWrap);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("projectEditBtn")) {
      if (!isFormShown) {
        console.log(event.srcElement.id);
        autofillProjectEditForm(event.srcElement.id);
        showForm(editProjectFormWrap);
      }
    }
  });

  //Close Forms
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("closeBtn")) {
      hideForm(event.target.parentNode.parentNode);
    }
  });

  //Handle Form Submits
  const formHandleSelectedProject = (task) => {
    let selectProject = document.getElementById("selectProject").value;
    if (selectProject !== "no project") {
      addTaskToArray(allProjects[selectProject].tasks, task);
      displayProjectWithTasks(allProjects[selectProject]);
    }
  };

  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask(newTaskName.value, newTaskDesc.value);
    if (allProjects.length > 1) {
      formHandleSelectedProject(allTasks[allTasks.length - 1]);
    }
    location.reload();
  });

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(editTaskId.value, editTaskName.value, editTaskDesc.value);
    location.reload();
  });
}

newProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createProject(newProjectName.value, newProjectDesc.value, []);
  location.reload();
});

editProjectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  editProject(editProjectId.value, editProjectName.value, editProjectDesc.value);
  location.reload();
});
