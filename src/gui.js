import { allTasks, createTask, addTaskToArray, fullDeleteTask } from "./tasks";
import { allProjects } from "./projects";

export function initDynamicContent() {
  const newTaskButton = document.getElementById("newTaskButton");
  const taskFormCloseButton = document.getElementById("taskFormClose");
  const taskFormContainer = document.getElementById("taskFormContainer");
  const projectList = document.getElementById("projectList");
  const taskForm = document.getElementById("taskForm");
  const taskArea = document.getElementById("taskAreaContent");
  const select = document.getElementById("selectProject");

  //DOM Utils

  const createDeleteBtn = () => {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");
    return deleteBtn;
  };

  const createEditBtn = () => {
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    return editBtn;
  };

  const displayProject = (project) => {
    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projectContainer");
    taskArea.appendChild(projectContainer);

    let projectName = document.createElement("h2");
    projectName.textContent = project.name;
    projectContainer.appendChild(projectName);

    let projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectContainer.appendChild(projectDescription);
  };

  const displayTask = (task) => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    taskArea.appendChild(taskContainer);

    let taskName = document.createElement("h3");
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    taskContainer.setAttribute("id", task.id);

    taskContainer.appendChild(createDeleteBtn());
    taskContainer.appendChild(createEditBtn());
  };

  const displayTasks = (project) => {
    for (let i = 0; i < project.tasks.length; i++) {
      displayTask(project.tasks[i]);
    }
  };

  const clearProjectTasks = () => {
    taskArea.textContent = "";
  };

  const deleteNode = (id) => {
    let element = document.getElementById(id);
    element.remove();
  };

  const displayProjectWithTasks = (project) => {
    clearProjectTasks();
    displayProject(project);
    displayTasks(project);
  };

  //END DOMUtils

  //On new load, auto display new tasks
  displayProjectWithTasks(allProjects[0]);

  //Display project info after clicking on each page
  projectList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      let projectName = event.target.innerText;
      let projectIndex = allProjects.findIndex(
        (project) => project.name == projectName
      );
      displayProjectWithTasks(allProjects[projectIndex]);
    }
  });

  //Main Content Listeners

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
      fullDeleteTask(event.target.parentNode.id);
      deleteNode(event.target.parentNode.id);
    }
  });

  // Forms
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

  //Task Form
  newTaskButton.addEventListener("click", () => {
    taskFormContainer.classList.remove("hidden");
    formClearProjectOptions();
    formDisplayProjectOptions();
  });

  taskFormCloseButton.addEventListener("click", () => {
    taskFormContainer.classList.add("hidden");
  });

  const formHandleSelectedProject = (task) => {
    let selectProject = document.getElementById("selectProject").value;
    addTaskToArray(allProjects[selectProject].tasks, task);
    displayProjectWithTasks(allProjects[selectProject]);
  };

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskName = document.getElementById("taskName").value;
    let taskDescription = document.getElementById("taskDescription").value;
    createTask(taskName, taskDescription);
    formHandleSelectedProject(allTasks[allTasks.length - 1]);
  });
  //End Forms
}
//end initDynamicContent

export const addProjectLink = (project) => {
  let projectLink = document.createElement("li");
  projectLink.classList.add("projectLink");
  projectLink.setAttribute("role", "button");
  projectLink.textContent = project.name;
  projectList.appendChild(projectLink);
};
