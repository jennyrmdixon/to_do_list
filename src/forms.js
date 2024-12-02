import {
  allProjects,
  createProject,
  editProject,
  addTasktoProject,
} from "./projects";
import { findIndexById } from "./helpers";
import { allTasks, createTask, addTaskToArray, editTask } from "./tasks";
import { displayProjectWithTasks, refreshPage, refreshProjectLinks } from "./gui";

export function initForms() {
  let isFormShown = false;

  //New Task Form Elements
  const newTaskFormWrap = document.getElementById("newTaskFormWrap");
  const newTaskForm = document.getElementById("newTaskForm");
  const newTaskBtn = document.getElementById("newTaskBtn");
  const selectProject = document.getElementById("selectProject");
  const noProjectNote = document.getElementById("noProjectNote");
  let newTaskName = document.getElementById("newTaskName");
  let newTaskDesc = document.getElementById("newTaskDesc");
  let newTaskColor = document.getElementById("newTaskColor");
  let newTaskPageId = document.getElementById("newTaskPageId");

  //Edit Task Form Elements
  const editTaskFormWrap = document.getElementById("editTaskFormWrap");
  const editTaskForm = document.getElementById("editTaskForm");
  let editTaskId = document.getElementById("editTaskId");
  let editTaskName = document.getElementById("editTaskName");
  let editTaskDesc = document.getElementById("editTaskDesc");
  let editTaskColor = document.getElementById("editTaskColor");
  let editTaskPageId = document.getElementById("editTaskPageId");

  //New Project Form Fields
  const newProjectBtn = document.getElementById("newProjectBtn");
  const newProjectFormWrap = document.getElementById("newProjectFormWrap");
  const newProjectForm = document.getElementById("newProjectForm");
  let newProjectName = document.getElementById("newProjectName");
  let newProjectDesc = document.getElementById("newProjectDesc");
  let newProjectPageId = document.getElementById("newProjectPageId");

  //Edit Project Form Fields
  let editProjectFormWrap = document.getElementById("editProjectFormWrap");
  let editProjectForm = document.getElementById("editProjectForm");
  let editProjectId = document.getElementById("editProjectId");
  let editProjectName = document.getElementById("editProjectName");
  let editProjectDesc = document.getElementById("editProjectDesc");
  let editProjectPageId = document.getElementById("editProjectPageId");

  //Add Task to Project Form Fields
  let addTasktoProjectFormWrap = document.getElementById("addTasktoProjectFormWrap");
  let addTasktoProjectForm = document.getElementById("addTasktoProjectForm");
  let addTasktoProjectFormHeader = document.getElementById("addTasktoProjectHeader");
  let addTasktoProjectFormId = document.getElementById("addTasktoProjectFormId");
  let selectTask = document.getElementById("selectTask");
  let noTaskNote = document.getElementById("noTaskNote");
  let addTasktoProjectSubmit = document.getElementById("addTasktoProjectSubmit")
  let addTasktoProjectPageId = document.getElementById("addTasktoProjectPageId");

  //Generate Dynamic Form Content
  const formRefreshProjectOptions = () => {
    //Used to load a dropdown list of available projects on New Task form
    //List all project options if projects other than default project exist
    if (allProjects.length > 1) {
      noProjectNote.classList.add("hidden");
      selectProject.classList.remove("hidden");
      selectProject.textContent = "";
      //Skips default 'All Projects' at Index 0
      for (let i = 1; i < allProjects.length; i++) {
        let projectOption = document.createElement("option");
        projectOption.textContent = allProjects[i].name;
        projectOption.value = i;
        selectProject.appendChild(projectOption);
      }
      let noProjectOption = document.createElement("option");
      noProjectOption.textContent = "Don't add to project";
      noProjectOption.value = "no project";
      selectProject.appendChild(noProjectOption);
      //If only the default project exists, display a note instead of the project select dropdown
    } else {
      noProjectNote.classList.remove("hidden");
      selectProject.classList.add("hidden");
    }
  };

  const formRefreshTaskOptions = (projectId) => {
    //Used to load a dropdown list of available tasks on Add to Project form
    selectTask.textContent = "";
    let currentProject = allProjects[findIndexById(allProjects, projectId)];
    let availableTasks = [];

    for (let i = 0; i < allTasks.length; i++) {
      //If a task does not already exist in current project then include it in the list of task options
      if (findIndexById(currentProject.tasks, allTasks[i].id) === -1) {
        availableTasks.push(allTasks[i]);
      }
    }
    //If no tasks are available to add to Project, display a note instead of the task select dropdown
    if (availableTasks < 1) {
      selectTask.classList.add("hidden");
      addTasktoProjectSubmit.classList.add("hidden");
      noTaskNote.classList.remove("hidden");
    } 
    
    else {
      selectTask.classList.remove("hidden");
      addTasktoProjectSubmit.classList.remove("hidden");
      noTaskNote.classList.add("hidden");


      for (let i = 0; i < availableTasks.length; i++) {
        let taskOption = document.createElement("option");
        taskOption.textContent = availableTasks[i].name;
        taskOption.value = findIndexById(allTasks, availableTasks[i].id);
        selectTask.appendChild(taskOption);
      }
    }
  };

  const autofillTaskEditForm = (taskId) => {
    let taskIndex = findIndexById(allTasks, taskId);
    editTaskId.value = allTasks[taskIndex].id;
    editTaskName.value = allTasks[taskIndex].name;
    editTaskDesc.value = allTasks[taskIndex].desc;
    editTaskColor.value = allTasks[taskIndex].color;
  };

  const autofillProjectEditForm = (projectId) => {
    let projectIndex = findIndexById(allProjects, projectId);
    editProjectId.value = allProjects[projectIndex].id;
    editProjectName.value = allProjects[projectIndex].name;
    editProjectDesc.value = allProjects[projectIndex].desc;
  };

  const autofillAddTaskToProjectForm = (projectId) => {
    //Add form heading
    let currentProject = allProjects[findIndexById(allProjects, projectId)];
    addTasktoProjectFormHeader.textContent =
      "Add Task For " + currentProject.name;
    //Add project ID to use on form submit
    addTasktoProjectFormId.value = projectId;
    formRefreshTaskOptions(projectId);
  };

  //Form Helper Functions

  const fillPageId = (form) => {
    //Adds project ID of current page to form. This is used to refresh the current page on form submit. 
    let projectHeading = document.getElementById("projectName");
    let projectIdValue = projectHeading.getAttribute("data-project");
    let projectIdField = form.querySelector(".pageIdField");
    projectIdField.setAttribute("value", projectIdValue);
  };

  const hideForm = (form) => {
    form.classList.add("hidden");
    isFormShown = false;
  };

  const showForm = (form) => {
    form.classList.remove("hidden");
    fillPageId(form);
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
        autofillTaskEditForm(
          event.srcElement.dataset.task,
          event.srcElement.dataset.project
        );
        showForm(editTaskFormWrap);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("projectEditBtn")) {
      if (!isFormShown) {
        autofillProjectEditForm(event.srcElement.dataset.project);
        showForm(editProjectFormWrap);
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("addTaskBtn")) {
      if (!isFormShown) {
        autofillAddTaskToProjectForm(event.srcElement.dataset.project);
        showForm(addTasktoProjectFormWrap);
      }
    }
  });

  //Close Forms
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("closeBtn")) {
      hideForm(event.target.parentNode.parentNode);
    }
  });

  const addTaskToSelectedProject = (task) => {
    let selectedProject = document.getElementById("selectProject").value;
    if (selectedProject !== "no project") {
      addTaskToArray(allProjects[selectedProject].tasks, task);
      displayProjectWithTasks(allProjects[selectedProject]);
    }
  };

  //Handle Form Submits
  newTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask(newTaskName.value, newTaskDesc.value, newTaskColor.value);
    if (allProjects.length > 1) {
      addTaskToSelectedProject(allTasks[allTasks.length - 1]);
    }
    refreshPage(newTaskPageId.value);
    hideForm(event.target.parentNode);
  });

  editTaskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    editTask(
      editTaskId.value,
      editTaskName.value,
      editTaskDesc.value,
      editTaskColor.value
    );
    refreshPage(editTaskPageId.value);
    hideForm(event.target.parentNode);
  });

  newProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createProject(newProjectName.value, newProjectDesc.value, []);
    refreshPage(newProjectPageId.value);
    hideForm(event.target.parentNode);
  });

  editProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    editProject(
      editProjectId.value,
      editProjectName.value,
      editProjectDesc.value
    );
    refreshPage(editProjectPageId.value);
    refreshProjectLinks();
    hideForm(event.target.parentNode);
  });

  addTasktoProjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let selectedProjectId = addTasktoProjectFormId.value;
    let selectedTaskIndex = selectTask.value;
    addTasktoProject(selectedProjectId, selectedTaskIndex);
    refreshPage(addTasktoProjectPageId.value);
    hideForm(event.target.parentNode);
  });
}
